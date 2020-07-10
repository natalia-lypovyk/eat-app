import React, {FC, useState} from 'react';
import { useForm } from 'react-hook-form';
import Text from 'ustudio-ui/components/Text';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { OrderButtonFilled } from '../../shared/components/order-button-filled';

import Styled from './reservation-page.styles';

const ReservationPage: FC = () => {
  const [orders, setOrder] = useState([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    const order = { ...data };
    setOrder(order);

    localStorage.setItem('orders', JSON.stringify(orders));

    reset();
  }

  return (
    <Styled.Container>
      <Styled.InfoBlock direction='column'>
        <Styled.Heading>Reservations</Styled.Heading>
        <Text>
          For parties of six or more, we recommend making reservations at least two weeks in advance.
          For walk-ins, we only sear parties on a first come, first served basis.
        </Text>
      </Styled.InfoBlock>

      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Label>
          Name*
          <Styled.NameInput
            type='text'
            name='first-name'
            ref={register({ required: true })}
            placeholder='First Name'
          />
          <Styled.NameInput
            type='text'
            name='last-name'
            ref={register({ required: true })}
            placeholder='Last Name'
          />
        </Styled.Label>

        <Styled.Label>
          Phone*
          <Styled.Input
            type='text'
            name='phone'
            ref={register({ required: true })}
            placeholder='+380931234567'
          />
        </Styled.Label>

        <Styled.Label>
          E-mail address
          <Styled.Input
            type='text'
            name='email'
            ref={register}
            placeholder='youremail@gmail.com'
          />
        </Styled.Label>

        <Styled.Label>
          Number of Guests*
          <Styled.NumberInput
            type='number'
            name='guests'
            ref={register({ required: true })}
            placeholder='6'
          />
        </Styled.Label>

        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput
        />

        <OrderButtonFilled />
      </Styled.Form>
    </Styled.Container>

  )
};

export default ReservationPage;
