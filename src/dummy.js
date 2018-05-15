<FormItem>
	{getFieldDecorator('id', {
		rules: [{ required: false, message: 'Please input your Password!' }],
	})(
		<Input type="hidden" />
	)}
</FormItem>
----
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class TheRForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let formData = {
					id: this.props.id,
					name: values.name,
					value: values.value,
					model: this.props.model
				}
				this.props.dispatch({type:`ADD_${this.props.model}`, formData})
			}
		});
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('id', {
						rules: [{ required: false, message: 'Please input your Password!' }],
					})(
						<Input type="hidden" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('name', {
						rules: [{ required: true, message: 'Input the value of the revenue' }],
					})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={this.props.name} />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('value', {
						rules: [{ required: true, message: 'Provide a value' }],
					})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder={this.props.value} />
					)}
					<Button type="primary" htmlType="submit" >
						Submit
					</Button>

				</FormItem>
			</Form>
		);
	}
}
----------
	<TheForm {...this.props.modalContent} dispatch={this.props.dispatch} model="income"/>