import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Button from "./Button.jsx";
import Icon from "./Icons.jsx";
import { contactPage, site } from "../data/siteContent.js";

const fields = contactPage.form.fields;

const initialValues = fields.reduce(
  (values, field) => ({
    ...values,
    [field.name]: "",
  }),
  {},
);

const fieldPlaceholders = {
  subject: "How can we help?",
};

function validateField(name, value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "This field is required.";
  }

  if (name === "name" && trimmed.length < 2) {
    return "Please enter your full name.";
  }

  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return "Please enter a valid email address.";
  }

  if (name === "subject" && trimmed.length < 3) {
    return "Please add a short subject.";
  }

  if (name === "message" && trimmed.length < 20) {
    return "Please add at least 20 characters so we can help.";
  }

  return "";
}

function SuccessMark({ reducedMotion }) {
  return (
    <div className="relative mx-auto grid h-24 w-24 place-items-center">
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-accent-500/20 bg-accent-500/[0.08]"
        initial={reducedMotion ? false : { scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-3 rounded-full border border-accent-600/20"
        initial={reducedMotion ? false : { scale: 0.65, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.svg
        viewBox="0 0 48 48"
        fill="none"
        className="relative h-12 w-12 text-accent-700"
        aria-hidden="true"
      >
        <motion.path
          d="m12 25 8 8 17-19"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.svg>
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const successRef = useRef(null);
  const focusFormRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (status !== "success") {
      return undefined;
    }

    const timer = window.setTimeout(() => successRef.current?.focus(), 760);

    return () => window.clearTimeout(timer);
  }, [status]);

  const updateField = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));

    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (name) => {
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, values[name]) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = fields.reduce((result, field) => {
      const error = validateField(field.name, values[field.name]);

      if (error) {
        result[field.name] = error;
      }

      return result;
    }, {});

    setErrors(nextErrors);
    setTouched(
      fields.reduce((result, field) => ({ ...result, [field.name]: true }), {}),
    );

    const firstError = fields.find((field) => nextErrors[field.name]);

    if (firstError) {
      document.getElementById(firstError.name)?.focus();
      return;
    }

    setStatus("success");
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    focusFormRef.current = true;
    setStatus("idle");
  };

  return (
    <div className="relative overflow-hidden rounded-4xl border border-ink-950/10 bg-white p-6 shadow-card-light sm:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-600/50 to-transparent"
      />

      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="font-display text-eyebrow uppercase text-accent-700">
            {status === "success" ? "Validation complete" : "Send a message"}
          </p>
          <h2 className="mt-4 font-display text-h2 text-ink-950">
            {status === "success" ? "Your message is ready." : "Tell us about the project."}
          </h2>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-gradient-soft text-accent-700">
          <Icon name={status === "success" ? "check" : "sparkles"} />
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            ref={successRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => successRef.current?.focus()}
            className="mt-8 rounded-3xl border border-accent-600/20 bg-accent-500/[0.055] p-5 outline-none sm:p-6"
          >
            <SuccessMark reducedMotion={prefersReducedMotion} />

            <div className="mt-5 text-center">
              <p className="font-display text-h3 text-ink-950">
                All fields passed validation.
              </p>
              <p className="mx-auto mt-3 max-w-md text-body-sm leading-relaxed text-ink-500">
                Form delivery is not connected yet, so nothing has been sent. Use the direct
                contact details below or ask the site owner to connect a form handler before
                launch.
              </p>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <a
                href={site.contact.email.href}
                className="flex items-center justify-center gap-2 rounded-2xl border border-ink-950/10 bg-white px-4 py-3 text-body-xs font-medium text-ink-950 transition hover:border-accent-600/30 hover:text-accent-700"
              >
                <Icon name="mail" className="h-4 w-4 text-accent-700" />
                Email directly
              </a>
              <a
                href={site.contact.phone.href}
                className="flex items-center justify-center gap-2 rounded-2xl border border-ink-950/10 bg-white px-4 py-3 text-body-xs font-medium text-ink-950 transition hover:border-accent-600/30 hover:text-accent-700"
              >
                <Icon name="phone" className="h-4 w-4 text-accent-700" />
                {site.contact.phone.display}
              </a>
            </div>

            <button
              type="button"
              onClick={resetForm}
              className="mx-auto mt-5 flex items-center gap-2 font-display text-body-xs font-medium text-ink-500 transition hover:text-ink-950"
            >
              Write another message
              <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              if (!focusFormRef.current) {
                return;
              }

              focusFormRef.current = false;
              document.getElementById("name")?.focus();
            }}
            className="mt-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => {
                const wide = field.name === "subject" || field.name === "message";
                const error = touched[field.name] ? errors[field.name] : "";
                const describedBy = error ? `${field.name}-error` : undefined;

                return (
                  <div key={field.name} className={wide ? "sm:col-span-2" : undefined}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-body-xs font-medium text-ink-700"
                    >
                      {field.label}
                      {field.required ? (
                        <span className="ml-1 text-accent-700" aria-hidden="true">
                          *
                        </span>
                      ) : null}
                    </label>

                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={values[field.name]}
                        onChange={(event) => updateField(field.name, event.target.value)}
                        onBlur={() => handleBlur(field.name)}
                        placeholder={fieldPlaceholders[field.name] ?? field.placeholder}
                        rows={6}
                        aria-required={field.required}
                        aria-invalid={Boolean(error)}
                        aria-describedby={describedBy}
                        className={`field resize-y ${error ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10" : ""}`}
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={values[field.name]}
                        onChange={(event) => updateField(field.name, event.target.value)}
                        onBlur={() => handleBlur(field.name)}
                        placeholder={fieldPlaceholders[field.name] ?? field.placeholder}
                        aria-required={field.required}
                        aria-invalid={Boolean(error)}
                        aria-describedby={describedBy}
                        autoComplete={
                          field.name === "name"
                            ? "name"
                            : field.name === "email"
                              ? "email"
                              : "off"
                        }
                        className={`field ${error ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/10" : ""}`}
                      />
                    )}

                    {error ? (
                      <p
                        id={`${field.name}-error`}
                        className="mt-2 flex items-center gap-1.5 text-body-xs text-red-700"
                      >
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-red-600" />
                        {error}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              className="mt-6"
              icon={<Icon name="arrow-up-right" className="h-4 w-4" />}
            >
              {contactPage.form.submitLabel}
            </Button>

            <p className="mt-4 text-body-xs leading-relaxed text-ink-400">
              Validation is active. Delivery is not connected yet, so connect a form handler
              before launch.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
