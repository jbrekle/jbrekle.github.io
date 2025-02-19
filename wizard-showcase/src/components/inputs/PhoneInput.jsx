import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

/**
 * This component uses the 'react-phone-input-2' package to render a phone input
 * with a dropdown for the country prefix. The user can still type numeric digits
 * and the plus sign. We rely on further validation steps to ensure the number
 * length is sufficient.
 */
function PhoneInputField({ value, onChange }) {
  /**
   * onChange from react-phone-input-2 gives us the plain phone string (with prefix).
   * We pass it upward for storage in the wizard's state.
   */
  return (
    <PhoneInput
      country={'us'}
      value={value}
      onChange={(phone) => onChange(phone)}
      disableDropdown={false} // We allow country selection
      countryCodeEditable={true}
      placeholder="Enter phone number"
      inputClass="border rounded w-full p-2"
      buttonClass="bg-white border border-gray-300"
    />
  );
}

export default PhoneInputField;
