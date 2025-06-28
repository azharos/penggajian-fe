import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import service from "../utils/service";

export default function Departemen() {
	const TOKEN = localStorage.getItem("TOKEN_API");

	if (!TOKEN) {
		return <Navigate to="/" />;
	}

	const [nama, setNama] = useState("");

	const onSubmit = async () => {
		// Proses ke API
		const response = await service.post(
			"/departemen",
			{
				nama: nama,
			},
			{
				headers: {
					Authorization: "Bearer " + TOKEN,
				},
			}
		);

		console.log(response.data);
	};

	return (
		<div>
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img src="/logo.png" alt="" style={{ width: "3.5em" }} />
						<span className="fw-bold fs-6 ms-2">Bank Jateng Syariah</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto">
							<Link className="nav-link" aria-current="page" to="/dashboard">
								Dashboard
							</Link>
							<Link className="nav-link" aria-current="page" to="/karyawan">
								Karyawan
							</Link>
							<Link className="nav-link" aria-current="page" to="/laporan">
								Laporan
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<section className="py-5">
				<div className="container">
					<h2>Departemen</h2>

					{/* Form */}
					<div className="row mb-3">
						<div className="col-md-6 d-flex">
							<div>
								<input
									type="text"
									class="form-control"
									placeholder="Masukkan Nama Departemen"
									value={nama}
									onChange={event => setNama(event.target.value)}
								/>
							</div>
							<button type="button" className="btn btn-primary btn-sm ms-2" onClick={onSubmit}>
								Submit
							</button>
						</div>
					</div>

					<div className="table-responsive">
						<table className="table table-striped table-bordered">
							<thead>
								<th>No</th>
								<th>Nama</th>
								<th>Aksi</th>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
}
