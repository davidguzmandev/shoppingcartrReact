export const Cart = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Nombre</th>
            <td>Precio</td>
            <td>Cantidad</td>
            <td>Opciones</td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          Checkout
        </button>
      </div>
    </>
  );
};
