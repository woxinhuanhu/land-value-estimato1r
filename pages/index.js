import { useState } from "react";
import { Search } from "lucide-react";

export default function LandValueEstimator() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setResult(null);

    const mockData = {
      lotSize: "50 x 122 ft (6,100 sqft)",
      zoning: "RS-5",
      area: "Kitsilano",
      landPricePerSqft: "$465/sqft",
      newHomeSaleRange: "$1,120 – $1,260/sqft",
      recommendation: "✅ 当前地价合理，具备开发价值。建议进一步财务模型分析。",
    };

    setTimeout(() => {
      setResult(mockData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        土地价值智能评估
      </h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          placeholder="请输入地址，如 3025 W 11th Ave"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: 4 }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{
            padding: "8px 16px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 4,
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "分析中..." : <><Search size={16} style={{ marginRight: 4 }} /> 开始评估</>}
        </button>
      </div>

      {result && (
        <div style={{ backgroundColor: "#f9f9f9", padding: 16, borderRadius: 8 }}>
          <p><strong>地址</strong>：{address}</p>
          <p><strong>土地面积</strong>：{result.lotSize}</p>
          <p><strong>分区类型</strong>：{result.zoning}</p>
          <p><strong>所在区域</strong>：{result.area}</p>
          <p><strong>土地近期均价</strong>：{result.landPricePerSqft}</p>
          <p><strong>新建房售价区间</strong>：{result.newHomeSaleRange}</p>
          <p><strong>结论建议</strong>：{result.recommendation}</p>
        </div>
      )}
    </div>
  );
}
