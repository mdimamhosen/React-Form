import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex w-4/5 mx-auto flex-col items-center mt-2">
      <h1 className="my-4 font-bold text-2xl">Introduce Yourself</h1>
      <form onSubmit={submitHandler} className="w-full">
        <label className="text-slate-500 text-lg" htmlFor="firstName">
          First Name
        </label>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={changeHandler}
          className="border-2 rounded-md outline-none my-2 p-2 w-full"
          id="firstName"
        />
        <br />
        <label className="text-slate-500 text-lg" htmlFor="lastName">
          Last Name
        </label>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={changeHandler}
          className="border-2 rounded-md outline-none my-2  p-2 w-full"
          id="lastName"
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={changeHandler}
          className="border-2 rounded-md p-2 my-2  outline-none w-full"
          id="email"
        />
        <br />
        <label className="text-slate-500 text-lg" htmlFor="country">
          Country
        </label>
        <br />

        <select
          name="country"
          id="country"
          className="border-2 rounded-md p-2 my-2  w-full outline-none"
          value={formData.country}
          onChange={changeHandler}
        >
          <option className="bg-black text-white" value="india">
            Bangladesh
          </option>
          <option className="bg-black text-white" value="usa">
            USA
          </option>
          <option className="bg-black text-white" value="uk">
            UK
          </option>
          <option className="bg-black text-white" value="uae">
            UAE
          </option>
        </select>

        <br />
        <label className="text-slate-500 text-lg" htmlFor="streetAddress">
          Street Address
        </label>
        <br />
        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="border-2 rounded-md outline-none my-2  p-2 w-full"
          id="streetAddress"
        />

        <br />
        <label className="text-slate-500 text-lg" htmlFor="city">
          City
        </label>
        <br />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="border-2 rounded-md outline-none  my-2 p-2 w-full"
          id="city"
        />

        <br />
        <label className="text-slate-500 text-lg" htmlFor="state">
          State
        </label>
        <br />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={changeHandler}
          className="border-2 rounded-md outline-none  my-2 p-2 w-full"
          id="state"
        />

        <br />
        <label className="text-slate-500 text-lg" htmlFor="postalCode">
          Zip / Postal Code
        </label>
        <br />
        <input
          type="number"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={changeHandler}
          className="border-2 rounded-md outline-none my-2 p-2 w-full"
          id="postalCode"
        />

        <br />
        <fieldset>
          <legend className="text-slate-500 font-bold text-lg">By Email</legend>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label className="text-slate-500 font-bold" htmlFor="comments">
                Comments
              </label>
              <p className="text-gray-500 text-sm">
                Get notified when someones posts a comment on a posting
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="candidate"
              name="candidate"
              checked={formData.candidate}
              onChange={changeHandler}
            />
            <div>
              <label className="text-slate-500 font-bold" htmlFor="candidate">
                Candidate
              </label>
              <p className="text-gray-500 text-sm">
                Get notified when someones posts a comment on a posting
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="candidate"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label className="text-slate-500 font-bold" htmlFor="candidate">
                Offers
              </label>
              <p className="text-gray-500 text-sm">
                Get notified when someones posts a comment on a offer
              </p>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-slate-500 font-bold">
            Push Notification
          </legend>
          <p className="text-gray-500 ">
            These are delivered via SMS to your phone.
          </p>

          <input
            type="radio"
            id="pushEverything"
            name="pushNotification"
            value="Everything"
            onChange={changeHandler}
            checked={formData.pushNotification === "Everything"}
          />
          <label className="text-slate-500 text-lg" htmlFor="pushEverything">
            {" "}
            Everything{" "}
          </label>

          <input
            type="radio"
            id="pushEmail"
            name="pushNotification"
            checked={formData.pushNotification === "Same as email"}
            value="Same as email"
            onChange={changeHandler}
          />
          <label className="text-slate-500 text-lg" htmlFor="pushEmail">
            {" "}
            Same as Email{" "}
          </label>

          <input
            type="radio"
            id="pushNothing"
            name="pushNotification"
            value="No Push Notification"
            checked={formData.pushNotification === "No Push Notification"}
            onChange={changeHandler}
          />
          <label className="text-slate-500 text-lg" htmlFor="pushNothing">
            {" "}
            No Push Notification{" "}
          </label>
        </fieldset>
        <button className="my-3 border bg-sky-500 text-white py-2 px-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
