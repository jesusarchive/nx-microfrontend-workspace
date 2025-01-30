import React from 'react';
import FormError, { type FormErrorType } from './form-error';

export type FormFieldProps = {
  children: React.ReactNode;
  error?: FormErrorType;
};

export default function FormField({ children, error }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
      <FormError error={error} />
    </div>
  );
}
