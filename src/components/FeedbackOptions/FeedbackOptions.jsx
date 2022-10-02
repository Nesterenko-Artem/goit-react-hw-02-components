import PropTypes from 'prop-types';
import { Button, List } from './ButtonOptions.styled';

export const Buttons = ({ options, click }) => {
  return (
    <>
      <List>
        {options.map((name, idx) => (
          <li key={idx}>
            <Button type="button" onClick={() => click(name)}>
              {name}
            </Button>
          </li>
        ))}
      </List>
    </>
  );
};

Buttons.prototype = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}