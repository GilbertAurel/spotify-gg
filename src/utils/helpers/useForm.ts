import React, { useState } from 'react';

type Props = {
  initialValue: any;
};

const useForm = ({ initialValue }: Props) => {
  const [value, setValue] = useState(initialValue);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue({ ...value, [e.target.name]: e.target.value });

  return [value, changeHandler];
};

export default useForm;
