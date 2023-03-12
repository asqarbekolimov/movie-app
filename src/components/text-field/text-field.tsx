import { TextFiledProps } from "./text-field.props";
import { useField, ErrorMessage } from "formik";
import { FieldHookConfig } from "formik/dist/Field";

const TextFiled = ({ ...props }: TextFiledProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="inline-block w-full">
      <label
        className={`inline-block w-full ${
          meta.touched && meta.error && "border-red-500 border-2 rounded-md"
        }`}
      >
        <input className="input" {...props} {...field} />
      </label>
      <p className="text-red-500">
        <ErrorMessage name={field.name} />
      </p>
    </div>
  );
};

export default TextFiled;
