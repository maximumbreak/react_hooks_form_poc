import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import { Form, Button, Input } from 'antd';

function FormComponent() {
  const { register, handleSubmit, setValue } = useForm(); // initialise the hook
  const onSubmit = data => {
    console.log(data);
  }; // callback when validation pass

  useEffect(() => {
    register({ name: 'username' });
    register({ name: 'password' });
  }, [register]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input onChange={e => setValue('username', e.target.value, true)} />
      <Input onChange={e => setValue('password', e.target.value, true)} />
      <Button type="primary" htmlType="submit">
        Log in
      </Button>
    </Form>
  );
}

export default FormComponent;
