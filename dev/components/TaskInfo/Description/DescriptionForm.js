import React from 'react';
import Form from 'reactstrap/lib/Form';
import FormGroup from 'reactstrap/lib/FormGroup';
import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default class DescriptionForm extends React.Component {
  state = { value: '' };

  handleChange = e => this.setState({ value: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.value);
    this.setState({ value: '' });
  };

  componentDidMount = () => {
    if (this.props.value) this.setState({ value: this.props.value });
  };

  render = () => (
    <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Input
          type="textarea"
          rows="5"
          value={this.state.value}
          onChange={this.handleChange}
          maxLength="2000"
        />
      </FormGroup>
      <FormGroup>
        <Row>
          <Col>
            <Button outline color="secondary">
              Сохранить
            </Button>
          </Col>
          <Col className="text-right text-muted small">
            {this.state.value.length} / 2000 символов
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}
