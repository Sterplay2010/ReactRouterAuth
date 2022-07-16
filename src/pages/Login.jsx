import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useStore, useStoreLogin } from "../storage/StorageSession";

export const Login = () => {
  let navigate = useNavigate();
  const { addUserSession } = useStore();
  const { emailUser, passwordUser, setEmailUser, setPasswordUser } =
    useStoreLogin();
  let info = [
    { email: "sterplay2010@gmail.com", password: "123456", role: 1 },
    { email: "felipe@gmail.com", password: "456", role: 1 },
    { email: "miriam@gmail.com", password: "321", role: 2 },
  ];

  const loginAuthentication = () => {
    let user = info.find(
      (usr) => usr.email == emailUser && usr.password == passwordUser
    );
    if (user) {
      addUserSession(user);
      if (user.role == 1) navigate(`/admin`);
      else navigate(`/user`);
    } else {
      alert("Datos errones!!!");
    }
  };

  useEffect(() => {
    useStore.persist.clearStorage();
  }, []);

  return (
    <div
      className="sm:h-screen md:h-screen md:flex md:justify-content-center"
      style={{ background: "#EAF3FB" }}
    >
      <div>
        <div className="grid container flex justify-content-center mt-2">
          <div className="text-lg md:flex md:justify-content-center">
            Esta es un login
          </div>
        </div>
        <div className="grid container flex justify-content-center mt-2">
          <InputText
            value={emailUser}
            onChange={(event) => setEmailUser(event.target.value)}
            type="text"
            className="block mb-2"
            placeholder="Email"
          />
        </div>
        <div className="grid container flex justify-content-center mt-2">
          <InputText
            value={passwordUser}
            onChange={(event) => setPasswordUser(event.target.value)}
            type="text"
            className="block mb-2"
            placeholder="Password"
          />
        </div>
        <div className="grid container flex justify-content-center mt-2">
          <Button
            onClick={loginAuthentication}
            label="Login"
            aria-label="Login"
            className="md:flex md:justify-content-center"
          />
        </div>
      </div>
    </div>
  );
};
