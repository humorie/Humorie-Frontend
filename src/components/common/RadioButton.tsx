const radioCheckedImg = '/src/assets/images/icon/icon_checked_pink.svg'
const radioUncheckedImg = '/src/assets/images/icon/icon_unchecked.svg'

interface RadioButtonProps {
  checked: boolean // 현재 라디오 버튼의 선택 상태
  onChange: () => void // 라디오 버튼이 클릭됐을 때 실행할 함수
  label: string // 라디오 버튼 옆에 표시될 텍스트
  name: string // 라디오 버튼 그룹의 이름
  value: string // 라디오 버튼의 값
}
// 이미지를 라디오 버튼으로 표현하는 컴포넌트
const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, label, name, value }) => (
  <label className="flex cursor-pointer flex-row items-center justify-start gap-[8px]">
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      className="hidden" // 기본 라디오 버튼 숨기기
    />
    <img src={checked ? radioCheckedImg : radioUncheckedImg} alt={label} />
    <div className="text-gray-700">{label}</div>
  </label>
)

export default RadioButton
