import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router";
import service from "../utils/service";

export default function HomeNew() {
	const navigate = useNavigate();
	const middleware = localStorage.getItem("TOKEN");

	if (middleware) {
		return <Navigate to="/dashboard" />;
	}

	const [form, setForm] = useState({
		nama: "",
		password: "",
	});

	const onChangeForm = (key, value) => {
		setForm({ ...form, [key]: value });
	};

	const onSubmit = async () => {
		const response = await service.post("/login", {
			email: form.nama,
			password: form.password,
		});

		const status = response.data.status;

		if (status) {
			localStorage.setItem("TOKEN", "Bearer " + response.data.data.token);
			navigate("/dashboard");
		} else {
			Swal.fire({
				text: "Email / Password Salah",
				icon: "error",
			});
		}
	};

	return (
		<div className="">
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
							<Link className="btn btn-primary" aria-current="page" to="/">
								Masuk
							</Link>
						</div>
					</div>
				</div>
			</nav>

			<section className="py-5">
				<div className="container text-center">
					<img src="/login.png" alt="" className="img-fluid" />
					<p className="fs-3 fw-bold mt-3">Masuk ke Akun Anda</p>
				</div>
			</section>

			<section className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="mb-3">
								<label for="nama_pengguna" className="form-label">
									Nama Pengguna / Email
								</label>
								<input
									type="text"
									className="form-control"
									id="nama_pengguna"
									placeholder="Masukkan Nama Pengguna / Email"
									onChange={e => onChangeForm("nama", e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="mb-3">
								<label for="kata_sandi" className="form-label">
									Kata Sandi
								</label>
								<input
									type="password"
									className="form-control"
									id="kata_sandi"
									placeholder="Masukkan Kata Sandi"
									onChange={e => onChangeForm("password", e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<button type="button" className="btn btn-primary w-100" onClick={onSubmit}>
								Masuk
							</button>
						</div>
					</div>

					<div className="text-center mt-5">
						<p>
							Belum Punya Akun ? <a href="">Daftar</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
