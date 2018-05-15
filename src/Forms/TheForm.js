import React from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import {Link,Route} from 'react-router-dom';
const FormItem = Form.Item;

const TheRForm = Form.create()(
	class extends React.Component {

		render() {
			const { visible, onCancel, onCreate, onUpdate, onDelete, form } = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal
					visible={visible}
					style={{top: '20px'}}
					title={this.props.name ? "Update Collection" : "Create a new collection"}
				  destroyOnClone={true}
					footer={[
						<Button key="Cancel" onClick={(e)=> {e.preventDefault() ; onCancel()}}>Cancel</Button>,
						<Button key={this.props.name ? "Update" : "Create"}
						         onClick={(e) => {e.preventDefault() ; this.props.name ? onUpdate() : onCreate()}}
						        type="primary"
						>
							{this.props.name ? "Update" : "Create"}

						</Button>,
						<Button key="Delete" onClick={(e)=> {e.preventDefault(); onDelete()}}>Delete</Button>

					]}
				>
					<Form layout="vertical">
						<FormItem label="Name">
							{getFieldDecorator('name', {
								rules: [{ required: true, message: `Please input the name of the ${this.props.model} !`}],
								initialValue: this.props.name,
							})(
								<Input placeholder={this.props.name} />
							)}
						</FormItem>
						<FormItem label="value">
							{getFieldDecorator('value',{
								rules: [{ required: true, message: `Please input the value of the ${this.props.model}!` }],
								initialValue: this.props.value,
							})
							(<Input placeholder={this.props.value} />)}
						</FormItem>
					</Form>
				</Modal>
			);
		}
	}
);

export const TheForm = TheRForm;
/*Now i can add the hidden id field's value with initialValua muhahahahahaha*/
