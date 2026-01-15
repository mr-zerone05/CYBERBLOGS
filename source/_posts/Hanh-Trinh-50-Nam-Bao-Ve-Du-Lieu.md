---
title: Toàn Cảnh Các Hệ Mã Hóa Từ 1975 Đến 2025 – Hành Trình 50 Năm Bảo Vệ Dữ Liệu
date: 2025-11-25 10:00:00
categories: [Security, Cryptography, History]
tags: [mã hóa, encryption, AES, RSA, ECC, DES, DSA, SHA, MD5, post-quantum, lịch sử mật mã học]
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1634&q=90
---

![Hero - 50 năm mật mã học](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1634&q=90)  
*Từ khối bê tông DES năm 1975 đến lưới lượng tử và đường cong elliptic ngày nay*

## 1. Thời kỳ tiền AES – Khi 56 bit còn là “bất khả xâm phạm”

![DES Machine - Deep Crack 1998](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Board300.jpg/500px-Board300.jpg)  
*Máy Deep Crack của EFF (1998) – chỉ tốn 250.000 USD và 56 giờ là bẻ được mọi khóa DES*

| Thuật toán     | Năm     | Độ dài khóa       | Tình trạng 2025                  | Ghi chú lịch sử                                      |
|----------------|---------|-------------------|-----------------------------------|------------------------------------------------------|
| Lucifer        | 1971    | 128 bit           | Tổ tiên của DES                   | Do Horst Feistel (IBM) phát triển                    |
| DES            | 1977    | 56 bit            | Đã bị bẻ hoàn toàn từ 1998        | Tiêu chuẩn Mỹ 1977–2002                              |
| Triple DES     | 1998    | 168 bit (~112 bit)| Deprecated NIST 2023              | DES 3 lần, vẫn còn trong ngân hàng cũ                |
| Blowfish       | 1993    | 32–448 bit        | Vẫn dùng được nhưng chậm          | Bruce Schneier thiết kế                              |
| Twofish        | 1998    | 128–256 bit       | Á quân cuộc thi AES               | Một trong 5 ứng viên cuối cùng                       |
| IDEA           | 1991    | 128 bit           | Vẫn an toàn nhưng ít dùng         | Từng dùng trong PGP 2.6                              |
| RC4            | 1987    | 40–2048 bit       | Bị cấm hoàn toàn trong TLS 2015   | Từng là vua của WEP và SSL cũ                        |

## 2. AES – Vị vua bất bại từ 2001 đến nay

![AES Round Transformation](https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/AES-SubBytes.svg/800px-AES-SubBytes.svg.png)

| Biến thể              | Độ dài khóa | Tốc độ 2025                  | Ứng dụng thực tế 2025                                  |
|-----------------------|-------------|------------------------------|--------------------------------------------------------|
| AES-128               | 128 bit     | Rất nhanh                    | Đủ cho hầu hết mục đích dân sự                         |
| AES-192               | 192 bit     | Trung bình                   | Chính phủ một số nước yêu cầu                          |
| AES-256               | 256 bit     | Nhanh (nhờ AES-NI)           | Quân sự, ngân hàng, Bitcoin, Signal, WhatsApp          |
| AES-GCM               | 128–256 bit | Rất nhanh + authenticated   | TLS 1.3, HTTPS mặc định, WireGuard                     |
| ChaCha20-Poly1305     | 256 bit     | Nhanh nhất trên di động      | Google, Cloudflare, WireGuard, Signal                  |

## 3. Mã hóa bất đối xứng – Cuộc cách mạng khóa công khai

![RSA Handshake minh họa](https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Public_key_encryption.svg/1024px-Public_key_encryption.svg.png)

| Hệ mã            | Năm     | Cơ sở toán học            | Độ dài khóa 2025        | Tình trạng thực tế 2025                        |
|------------------|---------|---------------------------|-------------------------|------------------------------------------------|
| RSA              | 1977    | Nhân tử lớn               | ≥ 3072 bit (khuyến 4096)| Vẫn dùng nhưng giảm dần                        |
| DSA              | 1991    | Logarithm rời rạc         | 3072 bit                | Deprecated NIST 2023                           |
| ElGamal          | 1985    | Logarithm rời rạc         | –                       | Cơ sở lý thuyết                                |
| ECC (NIST curves)| 2000s   | Đường cong elliptic       | 256–384 bit             | Vẫn mạnh nhưng nghi ngờ backdoor               |
| Curve25519/X25519| 2006    | Montgomery curve          | 256 bit                 | Tiêu chuẩn thực tế (Signal, WireGuard, TLS 1.3)|
| Ed25519          | 2011    | Edwards curve (chữ ký)    | 256 bit                 | Chữ ký nhanh và an toàn nhất                   |
| Kyber/ML-KEM     | 2024    | Lattice (LWE)             | 512–1024                | NIST chuẩn hóa chống lượng tử                  |
| Dilithium/ML-DSA | 2024    | Lattice (Fiat-Shamir)     | Level 2–5               | Chữ ký post-quantum chính thức                 |
| SPHINCS+         | 2024    | Hash-based                | 128–256 bit security    | An toàn dài hạn, không phụ thuộc toán khó      |

![ECC vs RSA](https://blog.cloudflare.com/content/images/2018/08/ecc-vs-rsa-chart.png)

## 4. Hàm băm – Từ “thảm họa” MD5 đến “siêu tốc” BLAKE3

![MD5 Collision – Flame 2012](https://www.kaspersky.com/content/en-global/images/repository/isc/2012/flame_md5_collision.png)

| Hàm       | Năm   | Độ dài output | Đã bị tấn công?                         | Dùng ở đâu 2025?                               |
|-----------|-------|---------------|-----------------------------------------|------------------------------------------------|
| MD5       | 1992  | 128 bit       | Bẻ hoàn toàn từ 2004                    | Chỉ còn checksum, tuyệt đối không dùng bảo mật |
| SHA-1     | 1995  | 160 bit       | Collision thực tế 2017 (SHAttered)      | Git đang chuyển dần sang SHA-256               |
| SHA-256   | 2001  | 256 bit       | Vẫn an toàn hoàn toàn                   | Bitcoin, SSL, PGP, hầu hết mọi thứ             |
| SHA-384/512 | 2001| 384–512 bit   | Vẫn an toàn                             | Chứng chỉ cao cấp, một số blockchain           |
| SHA-3     | 2015  | linh hoạt     | Không có tấn công đáng kể               | Dự phòng tương lai, một số hệ thống mới        |
| BLAKE2    | 2012  | 256–512 bit   | Rất an toàn                             | Zcash, WireGuard, Btrfs                        |
| BLAKE3    | 2020  | 256 bit       | Nhanh nhất thế giới 2025                | Arweave, IPFS mới, Rust, Deno, hầu hết dự án mới |

![BLAKE3 Speed](https://github.com/BLAKE3-team/BLAKE3/raw/master/perf/perf.png)

## 5. Giao thức E2EE thực tế 2025

![Signal Double Ratchet](https://signal.org/docs/specifications/doubleratchet/doubleratchet.png)

| Ứng dụng        | Giao thức                  | Khóa trao đổi   | Mã hóa tin nhắn          | Forward Secrecy | Post-Compromise |
|-----------------|----------------------------|-----------------|--------------------------|-----------------|-----------------|
| Signal          | Signal Protocol            | X3DH (Curve25519)| ChaCha20-Poly1305       | Yes          | Yes          |
| WhatsApp        | Signal Protocol            | X3DH            | AES-256-GCM              | Yes          | Yes          |
| Matrix          | Olm + Megolm               | Double Ratchet  | AES-256                  | Yes          | Yes          |
| Threema         | NaCl tự phát triển         | Curve25519      | XSalsa20-Poly1305        | Yes          | Yes          |
| Session         | Loki (fork Signal)         | Curve25519      | ChaCha20                 | Yes          | Yes          |
| iMessage (xanh) | Apple custom ECC           | ECDH            | AES-256                  | Partial      | No           |
| Telegram Secret | MTProto 2.0                | DH              | AES-256-IGE              | Yes          | No           |

## 6. Checklist bảo mật bạn phải nhớ năm 2025

| Nên dùng ngay ngay            | Cấm tuyệt đối từ 2025                     |
|-------------------------------|-------------------------------------------|
| AES-256-GCM / ChaCha20-Poly1305| DES, 3DES, RC4                           |
| X25519 + Ed25519              | RSA < 3072, DSA                           |
| BLAKE3 / SHA-256              | MD5, SHA-1                                |
| Signal Protocol               | MTProto mặc định (Telegram)               |
| Hybrid Kyber + X25519         | Chỉ dùng thuần RSA/ECC sau 2026          |

![Post-Quantum Future](https://images.unsplash.com/photo-1639413563581-60d669f82f7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)

**Tài liệu tham khảo**:
- [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)
- [Signal Protocol Specification](https://signal.org/docs/)
- [Cryptographic Right Answers 2025](https://gist.github.com/tqbf/be58d2d9f9d5ea5c1e9e639f9a3a2e9a)

