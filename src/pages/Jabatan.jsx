import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import service from "../utils/service";

export default function Jabatan() {
	const TOKEN = localStorage.getItem("TOKEN_API");

	if (!TOKEN) {
		return <Navigate to="/" />;
	}

	useEffect(() => {
		onFetch();
	}, []);

	const [id, setId] = useState(0);
	const [nama, setNama] = useState("");
	const [data, setData] = useState([]);

	const onSubmit = async () => {
		// Logic Action Create & Update
		if (id == 0) {
			// Create
			// Proses ke API
			const response = await service.post(
				"/jabatan",
				{
					nama: nama,
				},
				{
					headers: {
						Authorization: "Bearer " + TOKEN,
					},
				}
			);

			// response
			const status = response.data.status;
			if (status) {
				Swal.fire({
					text: "Data Berhasil",
					icon: "success",
				});

				setNama("");
				setId(0);
				onFetch();
			} else {
				Swal.fire({
					text: "Data Gagal",
					icon: "error",
				});
			}
		} else {
			// Update
			// Proses ke API
			const response = await service.put(
				"/jabatan/" + id,
				{
					nama: nama,
				},
				{
					headers: {
						Authorization: "Bearer " + TOKEN,
					},
				}
			);

			// response
			const status = response.data.status;
			if (status) {
				Swal.fire({
					text: "Data Berhasil",
					icon: "success",
				});

				setNama("");
				setId(0);
				onFetch();
			} else {
				Swal.fire({
					text: "Data Gagal",
					icon: "error",
				});
			}
		}
	};

	const onSubmitOld = async () => {
		// Proses ke API
		const response = await service.post(
			"/jabatan",
			{
				nama: nama,
			},
			{
				headers: {
					Authorization: "Bearer " + TOKEN,
				},
			}
		);

		// response
		const status = response.data.status;
		if (status) {
			Swal.fire({
				text: "Data Berhasil",
				icon: "success",
			});

			setNama("");
		} else {
			Swal.fire({
				text: "Data Gagal",
				icon: "error",
			});
		}
	};

	const onFetch = async () => {
		// Proses ke API
		const response = await service.get("/jabatan", {
			headers: {
				Authorization: "Bearer " + TOKEN,
			},
		});

		// response
		const status = response.data.status;
		if (status) {
			setData(response.data.data);
		} else {
			Swal.fire({
				text: "Data Gagal",
				icon: "error",
			});
		}
	};

	const onEdit = async id => {
		// Proses ke API
		const response = await service.get("/jabatan/" + id, {
			headers: {
				Authorization: "Bearer " + TOKEN,
			},
		});

		// response
		const status = response.data.status;
		if (status) {
			setId(response.data.data.id);
			setNama(response.data.data.nama);
		} else {
			Swal.fire({
				text: "Data Gagal",
				icon: "error",
			});
		}
	};

	const onDelete = async id => {
		// Proses ke API
		const response = await service.delete("/jabatan/" + id, {
			headers: {
				Authorization: "Bearer " + TOKEN,
			},
		});

		// response
		const status = response.data.status;
		if (status) {
			Swal.fire({
				text: "Data Berhasil di-Hapus",
				icon: "success",
			});

			onFetch();
		} else {
			Swal.fire({
				text: "Data Gagal",
				icon: "error",
			});
		}
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
					<h2>Jabatan</h2>

					{/* Form */}
					<div className="row mb-3">
						<div className="col-md-6 d-flex">
							<div>
								<input
									type="text"
									className="form-control"
									placeholder="Masukkan Nama Jabatan"
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
								<tr>
									<th>No</th>
									<th>Nama</th>
									<th>Aksi</th>
								</tr>
							</thead>
							<tbody>
								{data.map((item, idx) => {
									return (
										<tr key={idx}>
											<th>{parseInt(idx) + 1}</th>
											<td>{item.nama}</td>
											<td>
												<button
													className="btn btn-sm btn-warning"
													onClick={() => onEdit(item.id)}
												>
													Edit
												</button>
												<button
													className="btn btn-sm btn-danger"
													onClick={() => onDelete(item.id)}
												>
													Hapus
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
}
