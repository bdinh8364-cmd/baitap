import './App.css'

// Component User
function User({ avatar, name, organization }) {
  return (
    <div className="user-card">
      <img src={avatar} className="avatar" alt={name} />
      <h3>{name}</h3>
      <p>{organization}</p>
      <button>Xem chi tiết</button>
    </div>
  )
}

function App() {
  const users = [
    // Nam
    { id: 1, name: "Trần Đình Khánh", organization: "Techcombank", avatar: "0b0f0fce-a280-4d6f-ad1c-242ddc0a3002.jpg" },
    { id: 3, name: "A Tuấn", organization: "FPT Telecom", avatar: "3cf2ff2a-a312-4990-a103-b6de3b6583d9.jpg" },
    { id: 4, name: "Đinh Thanh Bình", organization: "VNG Corporation", avatar: "990d791a-d4ff-4569-a150-1086cc56a161.jpg" },
    { id: 6, name: "A Ngọc Kiểm", organization: "Zalo", avatar: "1918070c-aeef-4754-8146-4d6295a1a408.jpg" },
    { id: 7, name: "Nguyển Hoàng Nam", organization: "Be Group", avatar: "a3ee3b5f-6abd-4f60-a696-a1aae6c1598f (1).jpg" },
    { id: 9, name: "Rơ Châm Vụ", organization: "VNPay", avatar: "c953a7d1-dd65-4148-9c1d-b0c1730e529b.jpg" },

    // Nữ
    { id: 2, name: "Đào Nguyên Trung", organization: "VinGroup", avatar: "be977902-4495-45d5-93e8-84b6732e85d5.jpg" },
    { id: 5, name: "Lương Ngọc Thuận", organization: "MoMo", avatar: "ec37b28b-dfc2-4bed-aef3-a281d3033be1.jpg" },
    { id: 8, name: "Hưng đi chung kết thế giới", organization: "Sendo", avatar: "d03f712c-d2f8-46b3-b238-9944c5d08068.jpg" },
  ]

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Danh sách nhân sự</h1>

      <div className="user-list">
        {users.map((user) => (
          <User
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            organization={user.organization}
          />
        ))}
      </div>
    </div>
  )
}

export default App