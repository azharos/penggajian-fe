import React from "react";

export default function Home() {
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
									type="text"
									className="form-control"
									id="kata_sandi"
									placeholder="Masukkan Kata Sandi"
								/>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<button type="button" className="btn btn-primary w-100">
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
