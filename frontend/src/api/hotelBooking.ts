
import axios from "axios";

const BASE_URL = "https://localhost:7032/api/HotelBooking";


export const getHotelBookings = () => {
    return axios.get(`${BASE_URL}/GetAllHotelBooking`);
};

// GET a booking by ID
export const getHotelBookingById = (id: string) => {
    return axios.get(`${BASE_URL}/GetHotelBookingByID`, {
        params: { id },
    });
};

// ADD a booking
export const addHotelBooking = (data: {
    userID: string;
    HotelID: string;
    Checkindate: string;
    Checkoutdate: string;
    roomType: string;
    BookingDate: string;
    noofPeople: string;
    bookingStatus: string,
    price: string
}) => {
    return axios.post(`${BASE_URL}/AddHotelBooking`, data);
};

export const editHotelBooking = (
    id: string,
    data: {
        HotelBookingId: string;
        userID: string;
        HotelID: string;
        Checkindate: string;
        Checkoutdate: string;
        roomType: string;
        BookingDate: string;
        noofPeople: string;
        bookingStatus: string,
        price: string
    }
) => {
    const payload = {
        ...data,
        HotelBookingId: id,
    };
    return axios.patch(`${BASE_URL}/EditHotelBooking/${id}`, payload);
};

// DELETE a booking by ID
export const deleteHotelBooking = (id: string) => {
    return axios.delete(`${BASE_URL}/RemoveHotelBooking/${id}`);
};
