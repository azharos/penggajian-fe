import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router";

import service from "../utils/service";

export default function Home() {
	const navigate = useNavigate();
	const TOKEN = localStorage.getItem("TOKEN_API");

	if (TOKEN) {
		return <Navigate to="/dashboard" />;
	}

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	// Rumus
	const onChangeForm = (key, value) => {
		setForm({ ...form, [key]: value });
	};

	const onSubmit = async () => {
		// const response = await axios.post("http://penggajian.test/api/login", {
		// 	email: form.email,
		// 	password: form.password,
		// });

		const response = await service.post("/login", {
			email: form.email,
			password: form.password,
		});

		// response
		const status = response.data.status;
		if (status) {
			const token = response.data.data.token;

			// Add Token in Local Storage
			localStorage.setItem("TOKEN_API", token);

			navigate("/dashboard");
		} else {
			Swal.fire({
				text: "Email / Password Salah",
				icon: "error",
			});
		}
	};
	// function onSubmit(params) {}

	return (
		<div className="">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src="/logo.png" alt="" style={{ width: "3.5em" }} />
						<span className="fw-bold fs-6 ms-2">Bank Jateng Syariah</span>
					</a>
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
							<a className="btn btn-primary" aria-current="page" href="#">
								Masuk
							</a>
						</div>
					</div>
				</div>
			</nav>

			<section className="py-5">
				<div className="container text-center">
					<img src="/login.png" alt="" className="img-fluid" />
					<p className="fs-3 fw-bold mt-3 font-roboto">Masuk ke Akun Anda</p>
				</div>
			</section>

			<section className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="mb-3">
								<label for="email" className="form-label">
									Email
								</label>
								<input
									type="text"
									className="form-control"
									id="email"
									placeholder="Masukkan Email"
									onChange={event => onChangeForm("email", event.target.value)}
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
									onChange={event => onChangeForm("password", event.target.value)}
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
