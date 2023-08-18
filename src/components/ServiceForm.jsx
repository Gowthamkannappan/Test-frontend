import React, { useState } from 'react';

function ServiceForm() {
    const [formData, setFormData] = useState({
        complaint_image: null,
        component: null,
        vehicle: '',
        name: '',
        mobile_number: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        remarks: '',
        booking_date: null
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform actions with the form data, such as submitting to a server or processing it in some way.
        console.log(formData);
    };

    return (
        <div>
            <h2>Complaint Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Vehicle:
                    <input type="text" name="vehicle" value={formData.vehicle} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Mobile Number:
                    <input type="text" name="mobile_number" value={formData.mobile_number} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    State:
                    <input type="text" name="state" value={formData.state} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Pincode:
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Remarks:
                    <textarea name="remarks" value={formData.remarks} onChange={handleInputChange}></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ServiceForm;
