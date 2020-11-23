import React from "react";
import data from "../data/data";
import "./comentarios.css";

export default class Reseña extends React.Component {
  state = {
    comentarios: data
  };

  render() {
    return (
      <div className="container profile-page mt-4">
        <div className="row ">
          <div className="">
            {this.state.comentarios.map((data) => (
              <div className="card profile-header" key={data.id}>
                <div className="body">
                  <div className="row">
                    <div className="col-12">
                      <div className="profile-image float-md-right">
                        <img src={data.imagen2} alt="" />
                      </div>
                    </div>
                    <div className="col-12">
                      <h4 className="m-t-0 m-b-0">
                        <strong>{data.nombre}</strong>
                      </h4>
                      <p>{data.info}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}