import React from "react";
import { useForm } from "react-hook-form";

const DonateSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Donations section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <h2 className="text-center pb-4">SUPPORT OUR CAUSE</h2>
            <p className="text-center">
              A Simple Act, A Big Impact!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="wpo-donations-amount">
                <h2>
                  Kindly Donate via Mobile Money from all networks to the number
                  below. <br />
                  (Please use your email address as reference)
                </h2>

                <p className="momo">0530539725</p>
                <p>(She Cares Foundation)</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
