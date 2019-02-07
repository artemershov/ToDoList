import React from 'react';
import Button from 'reactstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';

export default class RemoveDoneBtn extends React.Component {
  removeDone = () => {
    if (confirm('Удалить все завершенные задачи?')) {
      this.props.remove();
    }
  };
  render = () => (
    <Button
      className={this.props.className}
      outline
      color="light"
      onClick={this.removeDone}>
      <FontAwesomeIcon icon={faTrashAlt} /> Удалить завершенные задачи
    </Button>
  );
}
