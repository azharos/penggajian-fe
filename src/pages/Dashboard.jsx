import React from "react";
import { useNavigate, Navigate, Link } from "react-router";

export default function Dashboard() {
	const navigate = useNavigate();
	const TOKEN = localStorage.getItem("TOKEN_API");

	if (!TOKEN) {
		return <Navigate to="/" />;
	}

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
					<h2>Dashboard</h2>
				</div>
			</section>
		</div>
	);
}
