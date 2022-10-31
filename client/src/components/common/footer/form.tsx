import { FC, useState } from "react";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useForm } from "react-hook-form";

import { Form as FormProvider } from "@components/form";
import { Button, Typography } from "@components/ui";

import { useTranslation } from "@hooks";

import { ContactSchema } from "@utils/schema";

export const Form: FC = () => {
  // **Props
  const t = useTranslation();

  // **Local state
  const [isError, setIsError] = useState(false);
  const [isSend, setIsSend] = useState(false);

  // **Form
  const methods = useForm<ContactSchema>({
    resolver: classValidatorResolver(ContactSchema)
  });
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsError(false);

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (resp.status !== 200) {
        throw resp;
      }

      setIsSend(true);
      reset();

      setTimeout(() => {
        setIsSend(false);
      }, 8000);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setIsError(true);
    }
  };

  return (
    <div id="form" className="footer-form">
      {isSend && <Typography color="main">{t.common.sent}</Typography>}
      {!isSend && (
        <>
          <Typography variant="h4">{t.common.leaveYourContacts}</Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <FormProvider.Input name="name" label={t.form.labels.name} />
            <FormProvider.Input
              name="phone"
              label={t.form.labels.phone}
              inputMode="numeric"
            />
            <Typography>{t.common.aggrement}</Typography>
            {isError && (
              <Typography color="error">{t.common.smthWrong}</Typography>
            )}
            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? t.common.submitting : t.common.submit}
            </Button>
          </FormProvider>
        </>
      )}
    </div>
  );
};
