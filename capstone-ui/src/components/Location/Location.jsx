import React from 'react';
import ReactDOM from 'react-dom';
import { AddressAutofill } from '@mapbox/search-js-react';

export default function Location (){
    return (
        <form>
            <AddressAutofill accessToken="pk.eyJ1Ijoicm9iYmVkMyIsImEiOiJjbDYxMHZjZDEwd3FpM2VueThkdXhvdjY3In0.9BnfhK_Gv049Gv1ks9i8yA">
                <input
                    name="address" placeholder="Address" type="text"
                    autoComplete="address-line1"
                />
            
            <input
                name="apartment" placeholder="Apartment number" type="text"
                autoComplete="address-line2"
            />
            <input
                name="city" placeholder="City" type="text"
                autoComplete="address-level2"
            />
            <input
                name="state" placeholder="State" type="text"
                autoComplete="address-level1"
            />
            <input
                name="country" placeholder="Country" type="text"
                autoComplete="country"
            />
            <input
                name="postcode" placeholder="Postcode" type="text"
                autoComplete="postal-code"
            />
            </AddressAutofill>
        </form>
    );
}
