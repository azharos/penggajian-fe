import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import service from "../utils/service";

export default function Karyawan() {
	const TOKEN = localStorage.getItem("TOKEN_API");

	if (!TOKEN) {
		return <Navigate to="/" />;
	}

	useEffect(() => {
		onFetchJabatanDepartemen();
	}, []);

	const onFetchJabatanDepartemen = async () => {
		const response_jabatan = await service.get("/jabatan", {
			headers: {
				Authorization: "Bearer " + TOKEN,
			},
		});
		const response_departemen = await service.get("/departemen", {
			headers: {
				Authorization: "Bearer " + TOKEN,
			},
		});

		const [jabatan, departemen] = await Promise.all([response_jabatan, response_departemen]);

		console.log(jabatan);
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
					<h2>Karyawan</h2>

					<div className="w-100">
						<Link to="/departemen" className="btn btn-sm btn-primary me-2">
							Departemen
						</Link>
						<Link to="/jabatan" className="btn btn-sm btn-primary">
							Jabatan
						</Link>
					</div>

					{/* Form */}
					<div className="card mt-3">
						<div class="card-header">Form Karyawan</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-4">
									<div class="mb-3">
										<label for="jabatan" class="form-label">
											Jabatan
										</label>
										<select class="form-select" id="jabatan">
											<option value="">Pilih Jabatan</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="departemen" class="form-label">
											Departemen
										</label>
										<select class="form-select" id="departemen">
											<option value="">Pilih Departemen</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="nama_lengkap" class="form-label">
											Nama Lengkap
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="nik" class="form-label">
											NIK
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="npwp" class="form-label">
											NPWP
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="status_ptkp" class="form-label">
											Status PTKP
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="tanggal_bergabung" class="form-label">
											Tanggal Bergabung
										</label>
										<input type="date" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="gaji_pokok" class="form-label">
											Gaji Pokok
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="nomor_rekening" class="form-label">
											Nomor Rekening
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="nama_bank" class="form-label">
											Nama Bank
										</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="status_kepegawaian" class="form-label">
											Status Kepegawaian
										</label>
										<select class="form-select" id="jabatan">
											<option value="">Pilih Status Kepegawaian</option>
											<option value="Tetap">Tetap</option>
											<option value="Tidak Tetap">Tidak Tetap</option>
										</select>
									</div>
								</div>
								<div className="col-md-4">
									<div class="mb-3">
										<label for="status_kepegawaian" class="form-label">
											Status Karyawan
										</label>
										<select class="form-select" id="jabatan">
											<option value="">Pilih Status Karyawan</option>
											<option value="Aktif">Aktif</option>
											<option value="Tidak Aktif">Tidak Aktif</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
