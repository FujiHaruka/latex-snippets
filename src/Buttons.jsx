import { useCallback, useState } from "react";
import { Button, Icon } from "semantic-ui-react";

export const SaveButton = ({ onClick }) => {
  const [completed, setCompleted] = useState(false);
  const onSave = useCallback(() => {
    onClick();
    setCompleted(true);
    setTimeout(() => {
      setCompleted(false);
    }, 1000);
  }, [onClick]);
  return (
    <Button onClick={onSave} disabled={completed}>
      {completed ? (
        <>
          <Icon name="check" /> Save
        </>
      ) : (
        <>
          <Icon name="save outline" /> Save
        </>
      )}
    </Button>
  );
};

export const SnippetsToggleButton = ({ onToggle, open }) => {
  return (
    <Button onClick={onToggle}>
      {open ? (
        <>
          <Icon name="angle up" /> Hide Snippets
        </>
      ) : (
        <>
          <Icon name="angle down" /> Show Snippets
        </>
      )}
    </Button>
  );
};
