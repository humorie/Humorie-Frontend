const PrivacyContents = () => {
  return (
    <div className="bodysmmedium relative flex h-[5496px] w-full flex-col items-start justify-start gap-[40px] text-gray-600">
      <div className="relative self-stretch">
        <p className="m-0">공고일자: 2024.08.14</p>
        <p className="m-0">시행일자: 2024.08.14</p>
      </div>
      <div className="relative self-stretch">{`앤데이(&DAY) (이하 '회사'라 함)는 개인정보보호법, 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법령상의 개인정보보호 규정을 준수하며, 관련 법령에 의거해 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다. 회사의 개인정보처리방침은 다음과 같습니다.`}</div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 1조. 개인정보의 수집·이용
        </b>
        <div className=" overflow-hiddentext-white relative h-[784px] w-full shrink-0">
          <div className="absolute left-[0px] top-[0px] flex w-[880px] flex-row items-center justify-start overflow-hidden rounded-b-none rounded-t-lg">
            <div className="box-border flex w-40 flex-row items-start justify-start self-stretch bg-gray-500 p-6">
              <div className="bodysmsemibold relative flex-1 text-white">분류</div>
            </div>

            <div className="flex flex-1 flex-row items-start justify-start self-stretch bg-gray-500 p-6">
              <div className="bodysmsemibold relative flex-1 text-white">수집 항목</div>
            </div>
            <div className="flex flex-1 flex-row items-start justify-start self-stretch bg-gray-500 p-6">
              <div className="bodysmsemibold relative flex-1 text-white">수집 목적</div>
            </div>
            <div className="box-border flex w-40 flex-row items-start justify-start self-stretch bg-gray-500 p-6">
              <div className="bodysmsemibold relative flex-1 text-white">보유 기간</div>
            </div>
          </div>
          <div className="absolute left-[0px] top-[68px] flex flex-row items-center justify-start overflow-hidden rounded-b-lg rounded-t-none text-gray-600">
            <div className="flex w-40 flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">필수 정보</div>
              </div>
              <div className="box-border flex h-[560px] flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">
                  서비스 이용 및 진행 과정에서 생성 및 수집되는 정보
                </div>
              </div>
              <div className="box-border flex h-[88px] flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">선택 정보</div>
              </div>
            </div>
            <div className="flex w-[280px] flex-col items-start justify-start">
              <div className="flex flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">이메일, 닉네임, 비밀번호, 성별, 나이</div>
              </div>
              <div className="box-border flex h-[560px] flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">
                  IP 주소, 쿠키, 방문일시, 서비스 이용기록, 불량 이용기록, SNS 계정정보, 커뮤니티
                  게시글 및 댓글에 기재된 정보, 상담/코칭/그룹 등의 서비스 내역, 접수지 및 검사지에
                  따른 개인정보, 결제 진행 시의 성명/전화번호/신용카드 결제정보(카드사명, 카드 번호
                  등)/은행계좌 정보
                </div>
              </div>
              <div className="flex flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">
                  타 SNS 계정정보, 전화번호, 통신사, 주소, 기타 물품 수령에 필요한 개인정보
                </div>
              </div>
            </div>
            <div className="flex w-[280px] flex-col items-start justify-start">
              <div className="box-border flex h-[628px] flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">
                  <p className="m-0">
                    ① 서비스 제공 : 결제, 콘텐츠 제공, 상담/코칭/그룹 등의 서비스 제공, 이메일 인증,
                    물품배송 또는 청구서 등 발송
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    ② 회원관리 : 회원제 서비스 제공에 따른 개인식별, 본인확인, 회원 가입 및 탈퇴
                    의사 확인, 서비스 이용과정에서 법령 및 약관 위반에 대한 이용제한 조치, 부정
                    이용방지와 비인가 사용방지, 추후 법정 대리인 본인확인, 분쟁 조정을 위한
                    기록보존, 불만처리 등 민원처리, 고지사항 전달
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    ③ 신규서비스 개발 및 마케팅 : 신규 서비스 개발 및 맞춤 서비스 제공, 통계학적
                    특성에 따른 서비스 제공 및 광고 게재, 서비스 유효성 확인, 이벤트 및 광고성 정보
                    및 참여기회 제공, 회원의 서비스 이용에 대한 통계, 접속빈도 파악, 심리
                    상담/코칭/그룹 관련 통계나 연구 등을 통해 심리상담/코칭/그룹 솔루션 개발 및 개선
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    ④ 맞춤형 개인화 서비스 개발 : 개인정보 및 상담/코칭/그룹에 기반한 맞춤형 추천
                    알고리즘 등의 서비스 개발 및 개선
                  </p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    ⑤ 인공지능 서비스 개발 : 커뮤니티 및 상담/코칭/그룹에 기반한 언어 기반 인공지능
                    및 챗봇 등의 서비스 개발 및 개선
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">
                  SNS 계정 연결, 고객 이벤트 제공, 부가 서비스 및 맞춤형 개인화 서비스 제공
                </div>
              </div>
            </div>
            <div className="flex w-40 flex-col items-start justify-start">
              <div className="box-border flex h-[628px] flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">
                  회원 탈퇴 시 관계 법령 및 내부 규정에 따른 보유기간 동안 보관
                </div>
              </div>
              <div className="box-border flex h-[88px] flex-row items-start justify-start self-stretch bg-gray-50 p-6">
                <div className="relative flex-1">상동</div>
              </div>
            </div>
          </div>
          <img
            className="absolute left-[0px] top-[68px] h-[716px] w-[880px]"
            alt=""
            src="src/assets/images/privacy_policy/divider_group.svg"
          />
          <div className="absolute left-[159.5px] top-[-0.5px] box-border h-[69px] w-px border-r-[1px] border-solid border-gray-400" />
          <div className="absolute left-[439.5px] top-[-0.5px] box-border h-[69px] w-px border-r-[1px] border-solid border-gray-400" />
          <div className="absolute left-[719.5px] top-[-0.5px] box-border h-[69px] w-px border-r-[1px] border-solid border-gray-400" />
        </div>
        <div className="relative self-stretch">
          <p className="m-0">① 개인정보 수집 방법</p>
          <ol className="font-inherit m-0text-inherit">
            <li className="mb-0">&nbsp;&nbsp;1. 서비스 이용 또는 신청 과정에서 수집</li>
            <li className="mb-0">
              &nbsp;&nbsp;2. 팩스, 전화, 상담, 이메일, 이벤트 응모 등의 과정에서 수집
            </li>
            <li className="mb-0">&nbsp;&nbsp;3. 협력회사로부터의 정보 수집 툴을 통한 수집</li>
          </ol>
          <p className="m-0">
            ② 상담/코칭/그룹 등의 서비스의 특성상 서비스 신청 전 또는 서비스 제공 과정에서 개인의
            건강과 관련된 정보가 수집되며, 서비스 내용과 진행에 따라 추가적인 개인정보가 포함될 수
            있습니다.
          </p>
          <p className="m-0">
            유료 서비스 과정에서 수집되는 개인정보에는 민감정보가 포함될 수 있습니다.
          </p>
          <ul className="font-inherit m-0  text-inherit">
            <li className="mb-0">
              &nbsp; • 직업, 학력, 상담경험, 정신과 진료경험, 신체적/정신적 호소 문제, 성장 과정 등
            </li>
          </ul>
          <p className="m-0">
            ③ 음성 기능이 포함된 전화 및 화상 등의 유료 서비스 이용 시, 인터넷 환경의 문제로 시스템
            연결이 불안정할 경우 가상번호를 이용하여 진행될 수 있습니다. 이 때 담당 전문가에게
            전화번호가 노출될 수 있으며 회사는 해당 번호를 수집하지 않습니다. 이외에도 서비스 이용
            과정에서 서비스 이용기록, 기기정보가 생성되어 수집될 수 있습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 2조. 개인정보 공유 및 제공
        </b>
        <div className="relative self-stretch">
          <p className="m-0">
            ① 회사는 이용자들의 개인정보를 “제 1조 개인정보의 수집·이용” 에서 고지한 범위 내에서
            사용하며, 이용자의 사전 동의 없이는 동 범위를 초과하여 이용하거나 원칙적으로 이용자의
            개인정보를 외부에 공개하지 않습니다. 다만, 아래의 경우를 예외로 하며 자세한 내용은 별첨
            [개인정보 목적 외 이용 및 제3자 제공 지침]을 따릅니다.
          </p>
          <ol className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;1. 이용자가 외부 제휴사의 서비스를 이용하기 위하여 개인정보 제공에 동의를
              한 경우
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;2. 법령에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라
              수사기관 또는 정보기관 등의 요구가 있는 경우
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;3. 이용자 또는 제 3자의 생명이나 안전에 급박한 위험이 확인되어 이를
              해소하기 위한 경우
            </li>
          </ol>
          <p className="m-0">
            ② 기타 세금과 관련하여 부가가치세 징수 목적 또는 연말정산 등을 위해 관계법령에 따라
            개인정보가 국세청 또는 관세청 등 과세 관련 처분청에 제공될 수 있습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 3조. 개인정보의 처리 위탁
        </b>
        <div className="relative self-stretch">
          <p className="m-0">
            ① 회사는 편리하고 더 나은 서비스를 제공하기 위해 업무 중 일부를 외부에 위탁할 수
            있습니다.
          </p>
          <p className="m-0">
            ② 회사는 이용자들이 전문적인 서비스를 제공받게 하기 위하여 심리상담/코칭/그룹 등의
            서비스 업무를 제휴된 전문가에게 위탁하고 있습니다.
          </p>
          <p className="m-0">
            ③ 회사는 서비스 제공을 위하여 필요한 업무중 일부를 외부 업체에 위탁할 수 있으며, 위탁할
            경우 위탁 받은 업체가 정보통신망법에 따라 개인정보를 안전하게 처리하도록 필요한 사항을
            규정하고 관리/감독을 합니다.
          </p>
          <p className="m-0">
            ④ 회사는 서비스 향상을 위하여 아래와 같이 개인정보를 위탁하고 있으며, 개인정보의
            수탁자와 위탁업무의 범위는 아래와 같습니다.
          </p>
          <ol className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;1. (주)토스페이먼츠, 카드사 : 신용카드, 휴대폰, 가상계좌 등을 통한
              결제처리 및 결제도용 방지
            </li>
            <li>
              &nbsp;&nbsp;2. 제휴 전문가 : 심리상담/코칭/그룹 등의 서비스 제공, 심리검사/코칭/그룹
              내용 확인 및 해석 등의 서비스와 관련된 업무 중 일부
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 4조. 개인정보 보유 및 이용 기간
        </b>
        <div className="relative self-stretch">
          원칙적으로 이용자가 서비스에 가입한 날로부터 계정 삭제 또는 해지 시까지 개인정보를 보유 및
          이용합니다. 회원 탈퇴 시 회사는 이용자의 수집된 개인정보가 열람 또는 이용될 수 없도록 파기
          처리합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우, 회사는 관계법령에서 정한
          일정한 기간 동안 회원정보를 보관합니다.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 5조. 개인정보 파기 절차 및 방법
        </b>
        <div className="relative self-stretch">
          <p className="m-0">
            ① 회사는 원칙적으로 이용자의 회원 탈퇴 시 특정 보호 기간을 거쳐 수집된 이용자 개인정보가
            열람 또는 이용될 수 없도록 파기 처리합니다. 단, 이용자에게 개인정보 보관기간에 대해
            별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보 보관 의무를 부과하는 경우에는 해당
            기간 동안 개인정보를 안전하게 보관합니다.
          </p>
          <p className="m-0">② 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
          <ol className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;1. 파기 절차 : 이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져
              (종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은
              즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니라면 다른
              목적으로 이용되지 않습니다.
            </li>
            <li>
              &nbsp;&nbsp;2. 파기 방법 : 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
              파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 복구할 수 없는 기술적인 방법을
              사용하여 삭제합니다.
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 6조. 개인정보의 수집/이용/제공 동의 철회
        </b>
        <div className="relative self-stretch">
          이용자는 회원가입 등을 통해 개인정보의 수집/이용/제공에 대해 동의하신 내용을 언제든지
          철회할 수 있습니다. 동의 철회는 관리 책임자에게 전자적 통신수단(E-mail 등) 및 앱 상의 기능
          등을 이용하여 신청할 수 있으며, 회사는 이를 확인 후 회원 탈퇴를 위해 필요한 조치를
          취합니다.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 7조. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항
        </b>
        <div className="self-stretchbodymdbold relative text-gray-900">
          <p className="m-0">
            ① 회사는 이용자들에게 특화된 맞춤서비스를 제공하기 위해서 이용자들의 정보를 저장하고
            수시로 불러오는 '쿠키(cookie)'를 사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는
            서버(HTTP)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터
            내의 하드디스크에 저장되기도 합니다.
          </p>
          <p className="m-0">
            ② 쿠키는 이용자들이 방문한 마인드카페의 각 서비스와 웹 사이트들에 대한 방문 및 이용형태,
            인기 검색어, 보안접속 여부, 뉴스편집, 이용자 규모 등을 파악하여 이용자에게 최적화된
            정보를 제공하기 위해 사용합니다.
          </p>
          <p className="m-0">
            ③ 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 이용자는 웹브라우저에서
            옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면
            모든 쿠키의 저장을 거부할 수도 있습니다.
          </p>
          <p className="m-0">
            ④ 쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 웹 브라우저의 옵션을 선택함으로써
            모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할
            수 있습니다.
          </p>
          <p className="m-0">{`설정방법 예시(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 > 인터넷 옵션 > 개인정보`}</p>
          <p className="m-0">
            다만, 쿠키의 저장을 거부할 경우 로그인이 필요한 일부 서비스는 이용에 어려움이 있을 수
            있습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 8조. 개인정보보호를 위한 기술적/관리적 대책
        </b>
        <div className="relative self-stretch">
          <p className="m-0">
            회사는 이용자의 개인정보를 보호하기 위해 기술적 대책과 관리적 대책을 마련하고 있으며,
            이를 적용하고 있습니다.
          </p>
          <p className="m-0">① 개인정보 암호화</p>
          <p className="m-0">
            회사의 회원 아이디(ID)의 비밀번호는 암호화되어 저장 및 관리되고 있어 회원 본인만이 알고
            있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 회원 본인에 의해서만 가능합니다.
          </p>
          <p className="m-0">② 해킹 등에 대비한 대책</p>
          <p className="m-0">
            회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을
            막기 위해 최선을 다하고 있습니다. 개인정보의 훼손에 대비해서 자료를 수시로 백업하고
            있고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 누출되거나 손상되지
            않도록 방지하고 있으며, 암호화통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할
            수 있도록 하고 있습니다. 그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을
            통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를
            갖추려 노력하고 있습니다.
          </p>
          <p className="m-0">③ 취급 직원의 최소화 및 교육</p>
          <p className="m-0">
            회사의 개인정보관련 취급 직원은 담당자에 한정하고 있고 이를 위한 별도의 비밀번호를
            부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 회사의
            개인정보처리방침 준수를 항상 강조하고 있습니다.
          </p>
          <p className="m-0">④ 개인정보보호전담기구의 운영</p>
          <p className="m-0">
            사내 개인정보보호전담기구 등을 통해 회사의 개인정보처리방침 이행사항 및 담당자
            준수여부를 확인하여 문제가 발견될 경우 즉시 수정하고 바로 잡을 수 있도록 노력하고
            있습니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">제 9조. 이용자의 권리</b>
        <div className="relative self-stretch">
          이용자는 언제든지 본 서비스에 등록되어 있는 본인의 개인정보를 열람하거나 정정할 수 있으며,
          전자우편 또는 앱 또는 웹 상의 기능을 통해 요청하신 경우 열람, 정정, 삭제처리
          해드리겠습니다.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">
          제 10조. 개인 정보 관련 담당자 연락처
        </b>
        <div className="relative self-stretch">
          <p className="m-0">
            회원은 회사 서비스 이용 중 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자
            혹은 담당부서로 신고할 수 있습니다.
          </p>
          <p className="m-0">회사는 회원의 신고사항에 대해 신속하게 답변을 드릴 것입니다.</p>
          <p className="m-0"></p>
          <p className="m-0">개인정보보호책임자</p>
          <p className="m-0">이름: 송태은</p>
          <p className="m-0">{`소속: 앤데이(&DAY)`}</p>
          <p className="m-0">직위: 대표</p>
          <p className="m-0">전화: 010-5766-4315</p>
          <p className="m-0">이메일: Humorial@gmail.com</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">개인정보관리담당자</p>
          <p className="m-0">이름: 송태은</p>
          <p className="m-0">{`소속: 앤데이(&DAY)`}</p>
          <p className="m-0">직위: 대표</p>
          <p className="m-0">전화: 010-5766-4315</p>
          <p className="m-0">이메일: Humorial@gmail.com</p>
          <p className="m-0"></p>
          <p className="m-0">
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기
            바랍니다.
          </p>
          <p className="m-0">1) 개인정보침해신고센터 (http://www.118.or.kr / 국번없이 118)</p>
          <p className="m-0">
            2) 대검찰청 사이버 범죄 수사단 (http://www.spo.go.kr / 02-3480-2000)
          </p>
          <p className="m-0">3) 경찰청 사이버테러대응센터 (http://www.ctrc.go.kr / 1566-0112)</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">제 11조. 기타</b>
        <div className="relative self-stretch">
          회사 홈페이지 또는 웹 또는 앱에 링크되어 있는 타 웹사이트들의 개인정보 수집 행위에
          대해서는 본 '회사 개인정보처리방침'이 적용되지 않습니다.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="bodymdbold relative self-stretch text-gray-900">제 12조. 고지의 의무</b>
        <div className="relative self-stretch">
          <p className="m-0">
            현 “회사 개인정보처리방침”에 내용이 추가되거나 삭제 및 수정이 있을 시 개정 최소 7일
            전부터 홈페이지 내 ‘공지사항’ 및 다양한 방법으로 고지할 것입니다.
          </p>
          <p className="m-0"></p>
          <p className="m-0">[개인정보 목적 외 이용 및 제3자 제공 지침]</p>
          <p className="m-0">
            앤데이는 외부기관에 본 지침을 통해 수집,보유하고 있는 개인정보 제공시 기준, 범위, 내용
            등에 대한 판단기준을 명확히 하고자 하며, 외부기관 개인정보자료 제공 등에 관하여 다른
            법령, 규정 또는 지침에서 특별히 정한 것을 제외하고는 본 지침을 따릅니다.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">관련근거</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;• 개인정보보호법 제17조(개인정보의 제공), 제18조(개인정보의 이용,제공 제한),
              제24조 (고유식별정보의 처리 제한), 개인정보보호법 시행령 제15조(개인정보의
              &nbsp;&nbsp;&nbsp;&nbsp;목적 외 이용 또는 제3자 제공의 관리), 개인정보보호법 시행규칙
              제2조(공공기관에 의한 개인정보의 목적 외 이용 또는 제3자 제공의 공고)
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">1. 기본원칙</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;가.자료제공판단원칙</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;•&nbsp; 목적의 정당성 : 구체적으로 어떠한 목적을 위하여 당해 개인정보가
              필요한지?
            </li>
            <li className="mb-0">
              &nbsp;•&nbsp; 수단의 적정성 : 당해 개인정보를 제공함으로써 당해 공익목적을 달성할 수
              있는 것인지?
            </li>
            <li className="mb-0">
              &nbsp;•&nbsp; 피해의 최소성 : 목적달성을 위하여 필요한 최소한의 정보는 어디까지인지?
            </li>
            <li className="mb-0">
              &nbsp;•&nbsp; 법익의 균형성 : 제공에 따른 이익과 정보주체가 받을 수 있는 예상피해를
              비교하여 전자가 우월하다고 할 수 있는지 여부 판단
            </li>
          </ul>
          <p className="m-0">※ 판단원칙을 종합적으로 검토한 후 필요한 최소한의 범위내에서 제공</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;나. 요청기관의 적격 여부 확인</p>
          <ul className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0">
              요청기관의 개별법에 자료요청의 근거조항이 구체적으로 명시된 경우 제공 가능
            </li>
            <li className="mb-0">
              요청기관의 개별법에 자료요청 근거법이 없는 경우 정보 주체 동의 여부 등 예외적 제공가능
              사항에 해당되는지 확인한 후 제공 여부 결정
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;다. 제공항목 판단</p>
          <ul className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0">
              본사가 직접 수집 또는 생산한 개인정보가 아닌 경우 자료제공 불가 (단, 정보주체의 동의가
              있는 경우 제공 가능)
            </li>
            <li className="mb-0">
              요청 목적에 부합하는 최소항목의 개인정보만 제공(개인정보 최소제공 원칙)
            </li>
            <li className="mb-0">
              민감정보는 법령(법률,시행령,시행규칙)에 민감정보의 처리를 요구(허용)하도록 규정되어
              있는 경우 제공
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">2. 개인정보제공기준</p>
          <p className="m-0">
            &nbsp;&nbsp;&nbsp;&nbsp;가. 수집 목적 범위내에서 제공하는 경우(법 제 17조)
          </p>
          <ul className="font-inherit m-0  text-inherit">
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 정보주체의 동의를 받은 경우</li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 법 제 15조 제1항 제2호,제3호 및 제5호에 따라 개인정보를 수집한
              목적 범위내에서 제공하는 경우
            </li>
            &nbsp;
          </ul>
          <p className="m-0">
            &nbsp;&nbsp;&nbsp;&nbsp;나. 수집 목적 외의 용도로 제공하는 경우(법 제 18조)
          </p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 개인정보처리자는 개인정보보호법 제 18조 제1항에 따라
              개인정보보호법 제 17조 제1항 및 제 3항의 범위를 초과하여 제3자에게 제공해서는 아니되나
              개인정보보호법 제 18조 제2항 각 호에 해당하는 다음의 경우에는 예외적으로 제공가능(단,
              정보주체 또는 제3자의 권익을 부당하게 침해할 우려가 있다고 인정되는 때에는 제공 불가)
            </li>
          </ul>

          <ol className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0"></li>
            <li className="mb-0">a. 정보주체로부터 별도의 동의를 받는 경우</li>
            <li className="mb-0">
              b. 다른 법률에 특별한 규정이 있는 경우(법률에서 개인정보의 제공을 구체적으로
              요구하거나 허용하고 있는 경우)
            </li>
            <li className="mb-0">
              c. 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명등으로
              사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제 3자의
              &nbsp;&nbsp;&nbsp;&nbsp;급박한 생명,신체, 재산의 이익을 위해 필요하다고 인정되는 경우
            </li>
            <li className="mb-0">d. 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우</li>
          </ol>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;다. 업무의 일부 또는 전부를 위탁하는 경우</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 개인정보 처리업무를 위탁하는 경우 위탁업무의 목적 등이 포함된
              문서에 의하여야 하며 위탁사항에 구체적으로 표기된 범위 내에서 제공
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">3. 제공여부 업무처리 기준</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;가. 요청절차의 적정성 확인</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 개인정보 제공 요청은 요청기관의 장이 문서로 접수
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 제공요청 문서접수 시 검토가 필요한 필수사항
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 요청하는 법률근거(정보주체의 동의를 받은 경우 동의 여부 확인)
            </li>
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 요청 목적</li>
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 요청하는 개인정보 항목</li>
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 이용 기간</li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;나. 자료제공 항목 판단</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 본사가 수집한 정보여부 확인</li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 본사가 직접 수집 또는 생산한 정보에 한하여 제공
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 본사가 다른 기관으로부터 입수,활용하는 정보는 제공불가
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 요청 목적에 부합하는 최소항목만 제공(개인정보 최소제공의 원칙)
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 자료제공 요청 항목이 요청 목적과 부합하지 않거나 과도하다고
              판단되는 경우 해당 항목은 제외하고 필요한 최소 범위 내 제공
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 자료요청과 관련된 개별 근거법에서 제공 항목을 열거하고 있는 경우
              해당 항목에 한해 제공
            </li>
          </ul>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;다. 자료제공 여부 및 범위 판단</p>
          <p className="m-0 pl-[19px]">
            개인정보의 제공 여부 판단 및 제공 범위는 요청 기관의 개별 법률과 개인정보보호 법령 및
            지침, 고시 해설서 등을 종합적으로 참조하여 사례별로 판단하고, 정보주체 또는 제3자의
            이익을 침해하지 않는 범위 내에서 최소한의 자료만 제공
          </p>
          <p className="m-0">&nbsp;</p>
          <ul className="font-inherit m-0  text-inherit">
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 정보주체의 동의를 받은 경우</li>
          </ul>
          <ol className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0">
              a. 요청기관이 정보주체의 동의를 받은 경우 요청기관으로부터 동의서를 전수 제출받아 확인
              후 제공
            </li>
            <li className="mb-0">
              b. 정보주체의 동의를 받아 제공하는 경우 개인정보보호법 제 18조 제3항에 따른 의무사항
              반드시 준수
            </li>
          </ol>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 다른 법률에 특별한 규정이 있는 경우(법 제 18조 제2항 제2호)
            </li>
          </ul>
          <ol className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0">
              a. 요청기관의 개별 법률을 근거로 자료제공을 요청하는 경우 자료 제공 근거법 유무 확인{' '}
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;&nbsp;&nbsp;- 요청기관의 개별법에 이용기관, 이용목적, 이용하는 개인정보의
              항목 등을 구체적으로 명시한 특별한 규정이 있는 경우 제공{' '}
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;&nbsp;&nbsp;※ 개별법에 “법령상 의무이행”과 같이 포괄적으로 규정되어 있거나
              시행령,시행규칙에만 규정이 있는 경우에는 제공 불가
            </li>
            <li className="mb-0">b. 요청목적의 적정여부확인</li>
          </ol>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 개별 법령에서 정한
              이용목적 및 요청항목과 요청목적이 부합하지 않는경우에는 제공 불가
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우(법 제18조
              제2항 제7호)
            </li>
          </ul>
          <ol className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0">
              a. 위 항목의 “다른법률에 특별한 규정이 있는 경우”의 자료 제공 기준에 준하여 판단
            </li>
            <li className="mb-0">
              b. 수사 등의 목적으로 개인정보 제공을 요청받은 경우에도 무조건 제공해야 하는 것은
              아니므로 영장, 사건번호, 접수번호 등을 확인한 후 자료제공 여부를 판단
            </li>
            <li className="mb-0 pl-[19px]">
              {' '}
              ※ 범죄의 형태와 경중, 정보주체가 받을 불이익의 정도 등 제반사정을 종합적으로 고려하여
              개인정보 이용이 없이는 수사목적을 달성할 수 없는 경우에 한하여 제한적으로 제공
              가능하나 요청기관과 협의하여 자료 제공범위 등 결정.
              <li className="mb-0">
                다만, 범죄수사 등을 위한 경우라 하더라도 정보주체 또는 제3자의 이익을 부당하게
                침해할 우려가 있는 경우에는 개인정보를 목적 외 용도로 이용하거나 제3자에게 제공할 수
                없음
              </li>
            </li>
          </ol>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">4. 자료제공 업무처리 기준</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;가. 업무처리절차</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 상기 기준에 의하여 자료제공여부를 판단 후 처리하며,
              개인정보보호책임자의 결재를 득한 후 결과에 따라 처리
            </li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; 개인정보 자료 제공은 부득이한 경우를 제외하고는 문서회신을
              원칙으로 하며 다음 사항을 반드시 기록
            </li>
          </ul>
          <ol className="font-inherit m-0 pl-[19px] text-inherit">
            <li className="mb-0">a. 이용목적, 이용방법, 이용기간, 이용형태의 제한사항</li>
            <li className="mb-0">b. 개인정보의 안전성 확보를 위해 필요한 구체적인 조치사항</li>
            <li className="mb-0">
              c. 자료제공 내역을 ‘개인정보의 목적 외 이용 및 제3자 제공대장’에 반드시 기록 및 관리
            </li>
          </ol>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;&nbsp;&nbsp;&nbsp;나. 자료제공 방법</p>
          <ul className="font-inherit m-0 text-inherit">
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 우편을 이용하는 경우 내용증명으로 발송</li>
            <li className="mb-0">
              &nbsp;&nbsp;•&nbsp; e-mail 에 의한 자료제공시 업무용 컴퓨터에서 사용하는 문서작성
              도구의 자체 암호화 기능 등을 통하여 개인정보 파일을 암호화하여 제공
            </li>
            <li className="mb-0">&nbsp;&nbsp;•&nbsp; 자료제공시 반드시 내부결제를 득한 후 제공</li>
            <li>
              &nbsp;&nbsp;•&nbsp; 문서 출력물에 의해 직접 전달하는 경우 요청기관의 담당자 또는
              직상급자에게 직접전달(수령자 인적사항 등을 반드시 기록하여 관리)
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrivacyContents
