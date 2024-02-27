import { useId } from "react";

const Input = ({ inputOnly, textarea, className, label, badge, ...props }) => {
  const id = useId();

  return (
    <>
      {inputOnly ? (
        <div className={className}>
          <input id={id} {...props} />
        </div>
      ) : (
        <div className={className}>
          <label htmlFor={id} badge={badge}>
            {label}
          </label>
          {textarea ? <textarea id={id} {...props}></textarea> : <input id={id} {...props} />}
        </div>
      )}
    </>
  );
};

export default Input;
