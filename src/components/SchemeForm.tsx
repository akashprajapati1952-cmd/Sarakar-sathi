
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {type UserInput } from '../utils/filterLogic';

interface SchemeFormProps {
  onFilter: (input: UserInput) => void;
}

// Validation Schema 
const SchemeFormSchema = Yup.object().shape({
  age: Yup.number()
    .typeError('कृपया केवल नंबर लिखें')
    .required('उम्र लिखना अनिवार्य है')
    .min(1, 'उम्र 1 से अधिक होनी चाहिए')
    .max(100, 'कृपया सही उम्र दर्ज करें'),
  income: Yup.number()
    .typeError('कृपया केवल नंबर लिखें')
    .required('वार्षिक आय लिखना अनिवार्य है')
    .min(0, 'आय 0 से कम नहीं हो सकती'),
  state: Yup.string().required('कृपया अपने राज्य का चयन करें'),
  occupation: Yup.string().required('कृपया अपने व्यवसाय का चयन करें'),
});

export const SchemeForm: React.FC<SchemeFormProps> = ({ onFilter }) => {
  const initialValues: UserInput = {
    age: undefined as unknown as number, 
    income: undefined as unknown as number,
    state: '',
    occupation: '',
  };

  const handleSubmit = (values: UserInput) => {
    onFilter(values);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 text-center border-b pb-3 border-orange-100">
        अपनी पात्रता (Eligibility) जांचें
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={SchemeFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            
            {/* (Age) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">आपकी उम्र (वर्षों में):</label>
              <Field
                type="number"
                name="age"
                placeholder="उदा. 22"
                className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                  errors.age && touched.age ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
                }`}
              />
              <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/*(Annual Income) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">वार्षिक पारिवारिक आय (₹):</label>
              <Field
                type="number"
                name="income"
                placeholder="उदा. 150000"
                className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                  errors.income && touched.income ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
                }`}
              />
              <ErrorMessage name="income" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* (State) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">राज्य चुनें:</label>
              <Field
                as="select"
                name="state"
                className={`w-full px-4 py-2 border rounded-xl bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                  errors.state && touched.state ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="" disabled hidden>राज्य का चयन करें</option>
                <option value="UP">उत्तर प्रदेश (UP)</option>
                <option value="Punjab">पंजाब (Punjab)</option>
                <option value="Bihar">बिहार (Bihar)</option>
                <option value="Delhi">दिल्ली (Delhi)</option>
              </Field>
              <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">अपना व्यवसाय चुनें:</label>
              <Field
                as="select"
                name="occupation"
                className={`w-full px-4 py-2 border rounded-xl bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                  errors.occupation && touched.occupation ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="" disabled hidden>व्यवसाय का चयन करें</option>
                <option value="Student">छात्र (Student)</option>
                <option value="Farmer">किसान (Farmer)</option>
                <option value="Laborer">मजदूर / श्रमिक (Laborer)</option>
                <option value="All">अन्य / बेरोजगार</option>
              </Field>
              <ErrorMessage name="occupation" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity duration-200 mt-2"
            >
              योग्य योजनाएं ढूंढें
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
