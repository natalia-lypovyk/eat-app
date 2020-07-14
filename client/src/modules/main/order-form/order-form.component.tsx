import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextInput from 'ustudio-ui/components/Input/TextInput';

import Styled from './order-form.styles';

export const OrderForm: FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <Controller as={TextInput} name={username} control={control} />
      </label>
    </Styled.Form>
  );
};
