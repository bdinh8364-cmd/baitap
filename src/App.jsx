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
    { id: 1, name: "Nguyễn Minh Quân", organization: "Techcombank", avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 3, name: "Lê Quốc Bảo", organization: "FPT Telecom", avatar: "https://i.pravatar.cc/150?img=13" },
    { id: 4, name: "Phạm Tuấn Anh", organization: "VNG Corporation", avatar: "https://i.pravatar.cc/150?img=15" },
    { id: 6, name: "Bùi Gia Huy", organization: "Zalo", avatar: "https://i.pravatar.cc/150?img=17" },
    { id: 7, name: "Ngô Thanh Hà", organization: "Be Group", avatar: "https://i.pravatar.cc/150?img=19" },
    { id: 9, name: "Hoàng Thanh Trúc", organization: "VNPay", avatar: "https://i.pravatar.cc/150?img=21" },

    // Nữ
    { id: 2, name: "Đinh Văn Tùng", organization: "VinGroup", avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 5, name: "Trần Minh Hiếu", organization: "MoMo", avatar: "https://i.pravatar.cc/150?img=14" },
    { id: 8, name: "Vũ Khánh Linh", organization: "Sendo", avatar: "https://i.pravatar.cc/150?img=16" },
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