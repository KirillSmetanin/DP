import './props.css';

export const ButtonVariant1 = ({ text, onClick }) => {
  return (
    <button className="my-button1" onClick={onClick}>
      <span className="text1">{text}</span>
    </button>
  );
};

export const ButtonVariant2 = ({ text, onClick }) => {
    return (
      <button className="my-button2" onClick={onClick}>
        <span className="text2">{text}</span>
      </button>
    );
  };  