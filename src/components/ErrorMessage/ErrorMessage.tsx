// ErrorMessage.tsx done

import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.text}>
      Oooops, something went wrong. Please reload the page
    </p>
  );
};

export default ErrorMessage;
