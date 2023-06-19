import { useForm } from 'react-hook-form';

import React, { useState } from 'react';

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true); 
    reset();

  };

  const validateName = (value) => {
    return value ? undefined : 'Name is required';
  };

  const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    } else if (!/^\S+@\S+$/i.test(value)) {
      return 'Invalid email format';
    }
    return undefined;
  };

  const validateSubject = (value) => {
    return value ? undefined : 'Subject is required';
  };

  const validateMessage = (value) => {
    return value ? undefined : 'Message is required';
  };

  

  return (
    <div id='contact' className='max-w-[1240px] m-auto p-4 h-screen bg-[#061424]'>
  {isSubmitted && (
        <div className='bg-green-500 text-white text-center p-4'>
          Form submitted successfully!
        </div>
      )}

      <h1 className='text-2xk font-bold text-center p-4 text-white'>Wanna meet up? Hit Me</h1>
      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-2'>
          <input
            className='border shadow-lg p-3'
            type='text'
            placeholder='Name'
            {...register('name', { validate: validateName })}
          />
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
          <input
            className='border shadow-lg p-3'
            type='email'
            placeholder='Email'
            {...register('email', { validate: validateEmail })}
          />
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        </div>

        <input
          className='border shadow-lg p-3 w-full my-4'
          type='text'
          placeholder='Subject'
          {...register('subject', { validate: validateSubject })}
        />
        {errors.subject && <span className='text-red-500'>{errors.subject.message}</span>}

        <textarea
          className='border shadow-lg p-3 w-full'
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Message'
          {...register('message', { validate: validateMessage })}
        />
        {errors.message && <span className='text-red-500'>{errors.message.message}</span>}

        <button className='border shadow-lg p-3 w-full mt-2 text-white' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;