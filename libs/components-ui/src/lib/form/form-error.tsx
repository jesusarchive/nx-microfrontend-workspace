export type FormErrorType = {
  message?: string;
};

export type FormErrorProps = {
  error?: FormErrorType;
};

export default function FormError({ error }: FormErrorProps) {
  if (!error?.message) {
    return null;
  }

  return <p className="text-red-500">{error.message}</p>;
}
