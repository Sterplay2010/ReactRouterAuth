import { useStore } from "../storage/StorageSession";

export const UserPage = () => {
  const { userSession } = useStore();
  return (
    <div
      className="sm:h-screen md:h-screen md:flex md:justify-content-center"
      style={{ background: "#EAF3FB" }}
    >
      <div>
        <div className="grid container flex justify-content-center mt-2">
          <div className="text-lg md:flex md:justify-content-center">
            Bienvenido usuario
          </div>
        </div>
        <div className="grid container flex justify-content-center mt-2">
          <div className="text-lg md:flex md:justify-content-center">
            {userSession.email}
          </div>
        </div>
      </div>
    </div>
  );
};
