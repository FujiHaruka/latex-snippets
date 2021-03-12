import "./SnippetList.css";
import { List, Button, Icon } from "semantic-ui-react";
import { TexSvg } from "./TexSvg";

export const SnippetList = ({ snippets, onPaste, onDownload, onDelete }) => {
  return (
    <List relaxed="very" divided>
      {snippets.map(({ key, tex }) => (
        <List.Item key={key}>
          <List.Content floated="right">
            <Button
              icon
              circular
              onClick={() => onPaste(tex)}
              title="Edit"
              size="mini"
            >
              <Icon name="paste" /> Paste
            </Button>
            <Button
              icon
              circular
              onClick={() => onDownload({ key, tex })}
              title="Download"
              size="mini"
            >
              <Icon name="download" />
            </Button>
            <Button
              icon
              circular
              onClick={() => onDelete(key)}
              title="Delete"
              size="mini"
              style={{ marginLeft: "12px" }}
            >
              <Icon name="trash" />
            </Button>
          </List.Content>
          <List.Content className="SnippetList-item-content">
            <TexSvg tex={tex} scale={12} />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};
