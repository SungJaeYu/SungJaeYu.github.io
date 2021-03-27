var tipuesearch = {"pages": [{
    "title": "DHCP(Dynamic Host Configuration Protocol)",
    "text": "DHCP DHCP란 호스트의 IP주소와 각종 TCP/IP 프로토콜의 기본 설정을 클라이언트에게 자동적으로 제공해주는 프로토콜이다. 클라이언트가 DHCP 서버에게 IP를 요구하면 IP를 할당해주게 된다. DHCP는 Application Layer Protocol이다. DHCP Allocation DHCP는 IP를 세 가지 방식으로 할당한다. Dynamic Allocation : 동적으로 IP를 할당 Automatic Allocation : 같은 Machine에 같은 IP를 할당 Fixed Allocation : MAC 주소에 대응하는 IP를 table에서 찾아서 할당 DHCP Discovery Source가 DHCP DISCOVERY 메시지를 broadcast한다. 메시지를 받은 DHCP 서버가 DHCP OFFER 메시지를 전송한다. 메시지를 받은 Source가 DHCP REQUEST 메시지를 전송한다. (여기서 Source가 OFFER 메시지를 거절할 수 있다. 왜냐하면 여러 DHCP가 존재할 경우 한 서버에게만 Request하기 위해서 이다.) Request를 받은 DHCP 서버는 DHCP ACK를 전송한다.",
    "tags": "network communication",
    "url": "/communication/2021/03/07/CM-dhcp.html"
  },{
    "title": "[Divide &amp; Conquer] Polynomial Multiplication",
    "text": "Polynomial Multiplication 작은 수의 곱은 컴퓨터에서 쉽게 처리할 수 있다. 하지만 큰 수의 곱은 컴퓨터에서 쉽게 처리하기 어렵기 때문에 큰 수는 Polynomial하게 처리하여 속도를 높일 수 있다. 여기서는 일반적인 Polynomial Multiply의 Time complexity를 Divide Conquer를 통해 줄이는 방법을 소개한다. 두 개의 다항식을 곱하는 상황을 고려해보면, 아래 그림과 같다. Naive Naive한 방법으로는 이중 반복문을 통해 모든 수를 곱하고 더하는 방법이 있다. 하지만 이 방법은 이중 반복문을 사용하기 때문에 다항식의 개수 = n 일 때, O(n^2) 이다. Divide and Conquer 그림처럼 다항식을 반으로 나눈다. 그 후에 따로 계산된 값을 더하여 원하는 값을 출력한다. (A(x) = D1, D0 / B(x) = E1, E0로 나누었다.) 이 경우에는 보는 것 처럼 AB를 출력하기 위해 4가지의 하위 Task(D1E1, D1E0, D0E1, D0E0) 가 이루어 지고, 이를 합치기 위해 kn의 Task가 이루어진다. 즉, T(n) = 4 * T(n/2) + kn 이를 Master Theorem으로 계산해보면 O(n^2)이 나온다. 이는 Naive한 접근과 다르지 않다. 그렇다면 Divide Conquer가 소용이 없는것일까? Karatsuba Divide and Conquer 이 공식을 사용하면 4가지 Task가 아닌 3가지 Multiplication Task만 시행하면 된다. D1E1 D0E0 ( D1 + D0 )(E1 + E0) T(n) = 3 * T(n/2) + kn 이므로, O(n^(log_2(3)) = O(n^(1.58))이다. Big Number Multiplication 312 * 514를 한다고 가정하면, 3 * 10^2 + 1 * 10 + 2 * 10^0 5 * 10^2 + 1 * 10 + 4 * 10^0 이를 다항식으로 계산하여 처리할 수 있다.",
    "tags": "dc algorithm",
    "url": "/algorithm/2021/03/07/AG-polymultiply.html"
  },{
    "title": "[Divide &amp; Conquer] Master Theorem",
    "text": "Master Theorem Master Theorem은 Divide &amp; Conquer(분할정복)에 사용되는 Theorem(정리)이다. 분할 정복에서는 재귀 호출 방식을 사용하는데 이 때 이 모든 연산 절차의 Time Complexity를 계산하는 일종의 공식이다. T(n) = a * T( ceil( n / b )) + O(n^d) 이라고 가정했을 때, 세 가지 상황으로 구분되어 T(n)을 구할 수 있다. T(n) = O(n^d) if d &gt; log_b(a) T(n) = O(n^d * log(n)) if d == log_b(a) T(n) = O(n^(log_b(a))) if d &lt; log_b(a) ex) T(n) = 4 * T(n/2) + O(n) =&gt; a = 4, b = 2, d = 1 =&gt; log_b(a) = log_2(4) = 2 =&gt; d &lt; log_b(a) =&gt; T(n) = O(n^(log_b(a))) = O(n^2) Proof 총 재귀되는 level은 ceil( log_b(n) )이다. 만약 n = 8일 때, 이분할하여(b=2) 연산 한다고 하면, 총 재귀의 level은 8 - (4, 4) - (2, 2, 2, 2) - (1, 1, 1, 1, 1, 1, 1, 1) leve은 보는것처럼 시작이 level = 0 이라고 할 때, 총 level == 3으로 log_b(a) = log_2(8) = 3이다. 즉 재귀 level 은 log_b(n) 이다. 각 재귀로 호출 되는 Task 들의 관계(T(n) = a * T(n/b) + O(n^d))를 계산하면, 이 모든 work의 합은 등비수열 합의 공식으로 구할 수 있다. 등비수열의 합 공식은 곱해지는 수에 따라 결과값이 바뀌므로 아래와 같은 세 가지 상황으로 구분되게 된다. r == 1 r &gt; 1 r &lt; 1 r = (a/b^d) 이므로, Master Theorem 공식처럼 d &gt; log_b(a) d == log_b(a) d &lt; log_b(a) 세 가지로 구분된다. d &gt; log_b(a) 등비수열 합 공식에 따라서 아래와 같다. 이 때, d &gt; log_b(a) 이므로, 결국 O(n^d) 가 된다. d &lt; log_b(a) 위 그림과 똑같지만 d &lt; log_b(a) 이므로, O(n^(log_b(a))가 된다. d == log_b(a) 곱해지는 수가 1이면(d == log*b(a)), 총 합은 level * O(n^d) 이 된다. r == 1이면 초항 * 개수이므로, 초항 = O(n^d), 개수는 level 수가 된다. 여기서 level = log_b(n), r = a/b^d 이므로, log_b(n) * O(n^d)이므로 결국 O(log(n) * n^d)",
    "tags": "dc algorithm",
    "url": "/algorithm/2021/03/07/AG-mastertheorem.html"
  },{
    "title": "DNS(Domain Name System) Server",
    "text": "DNS(Domain Name System)는 사람이 읽을 수 있는 도메인 이름(예: www.google.com)을 IP 주소로 변환하는 역할을 한다. IP 주소로 접속하기 위해서는 모든 서버의 IP를 외우고 있어야 한다. 하지만 도메인 이름을 사용함으로서 암기가 원활해졌고, DNS는 도메인 이름으로 실제 서버의 IP를 찾기위해 사용된다.. DNS 서버 종류 Caching name servers Recursive name servers Root name servers TLD name servers Authoritative name servers Caching/Recursive Caching/Recursive name server는 ISP나 local network에 의해 제공된다. 이 두 서버는 아래와 같이 동작한다. 처음으로 한 유저가 “www.google.com” 의 IP를 요구한다. Recursive 서버가 DNS 절차를 모두 거쳐 IP를 보내준다. 다른 유저가 똑같이 구글의 IP를 요구한다. Caching 서버에 cache된 이전 요청의 답을 보낸다 위 과정을 통해서 전체 look-up과정을 줄일 수 있다. DNS 절차 User가 Caching/recursive 서버에게 IP 주소 요청 Caching 되어 있다면 바로 응답 아닐 경우 아래 절차 진행 Recursive 서버가 Root DNS 서버에게 IP 주소를 요청 Root DNS 서버가 Top Level DNS 서버의 IP 주소 응답 Recursive 서버가 Top Level DNS 서버에게 IP 주소를 요청 Top Level DNS 서버가 Authoritative name 서버의 IP 주소 응답 Recursive 서버가 Authoritative name 서버에게 IP 주소를 요청 Authoritative name 서버가 IP 주소 응답 DNS Look-up (TCP) DNS request는 UDP를 사용한다. 하지만 아래는 TCP DNS look-up 과정이다. User가 Caching/Recursive Name server에 53번 포트로 SYN 패킷 전송 SYN-ACK와 ACK를 보내며 3 way hand shake 절차 진행(Connection Established) User가 Request 전송 및 Caching/Recursive Name server ACK 전송(여기까지 5 Packets) Caching/Recursive Name server가 Root name 서버에 3 hand-shake 절차(3 Packets) C/R Name 서버와 Root 서버는 REQ, REQ-ACK, RES, RES-ACK(4 Packets) C/R Name 서버와 Root 서버 연결 해제(4 way handshake, 4 Packets) 나머지 서버(TLD, Authoritative)와 각 각 11 Packets를 교환하며 IP 확인 결국 최소 5 + 11 + 11 + 11 = 38 패킷 교환 DNS Look-up (UDP) User가 C/R 서버에 Req 1 패킷 전송 C/R 서버가 Root 서버에 Req 전송 및 Res 수신 나머지 서버 동일 총 7 패킷 사용 이런 패킷 차이 때문에 DNS look-up 과정에서는 UDP를 사용한다. 하지만 오류가 났을 때는 어떻게 할까? 그냥 다시 보내면 된다.",
    "tags": "network communication",
    "url": "/communication/2021/02/18/CM-dns.html"
  },{
    "title": "Greatest Common Divisor &amp; Least Common Multiple",
    "text": "Greatest Common Divisor(GCD) 최대공약수를 구하는 법은 단순하게 확인하는 숫자보다 작은 모든 숫자를 확인하면서 두 숫자를 나눌 수 있는 수 중에 가장 큰것을 출력하는 것이다. int gcd_naive(int a, int b) { int current_gcd = 1; for (int d = 2; d &lt;= a &amp;&amp; d &lt;= b; d++) { if (a % d == 0 &amp;&amp; b % d == 0) { if (d &gt; current_gcd) { current_gcd = d; } } } return current_gcd; } 이 방법은 모든 숫자를 확인해야 되기 때문에 항상 O(max(a, b)) 만큼 걸린다. 하지만 유클리드 호제법(Euclidean Algorithm)을 사용하면 더 빠르게 구할 수 있다. 유클리드 호제법 : 위키피디아 참고 유클리드 호제법을 사용하면 아래와 같다. int gcd_fast(int a, int b) { int R; while ((a % b) &gt; 0) { R = a % b; a = b; b = R; } return b; } 위 방법보다 훨씬 빠르다. Least Common Multiple(LCM) 최소공배수를 구하는 방법은 간단하다. 두 수의 곱은 GCD * LCM이다. 그러므로 두 수 a, b의 최소공배수는 (a * b)/GCD 이다. long long lcm_fast(int a, int b) { long long lcm = (long long)a * b / (long long)gcd_fast(a, b); return lcm; }",
    "tags": "algorithm",
    "url": "/algorithm/2021/02/12/AG-gcd-lcm.html"
  },{
    "title": "Fibonacci Number",
    "text": "Fibonacci Algorithm 피보나치를 쉽게구하는 방법은 재귀함수를 사용하는 것이다. int fibonacci_naive(int n) { if (n &lt;= 1) return n; return fibonacci_naive(n - 1) + fibonacci_naive(n - 2); } 재귀함수를 사용하면 간단한 코드로 피보나치의 n번째 값을 구할 수 있다. 하지만 이 알고리즘은 시간이 오래걸린다. 무려 O(2^n)이 걸린다. 여기서 우리는 이미 계산했던 값을 다시 구한다는 것을 알 수 있다. n번째를 구하기 위해 계산해야 되는 n-1번째와 n-2번째는 같은 값을 한번씩 총 두번이나 중복 계산하게 된다. ex) n-3번째 피보나치는 n-1번째와 n-2번째에서 두번 다 계산한다. 이 방법을 해결하기 위해 새로운 알고리즘을 작성할 수 있다. int fibonacci_fast(int n) { if (n &lt;= 1) return n; vector&lt;int&gt; Fibo(n+1); Fibo[0] = 0; Fibo[1] = 1; for (int i = 2; i &lt; n+1; i++) { Fibo[i] = Fibo[i - 1] + Fibo[i - 2]; } return Fibo[n]; } 피보나치값을 저장하는 배열을 만든 후, 그 값들을 저장하는 것이다. 이 경우에는 O(n)밖에 걸리지 않는다. Fibonacci Last Digit 피노나치 값의 마지막 숫자를 구하는 알고리즘이다. 마지막 값만 계산하면 되기 때문에 마지막 숫자의 증가만 계산하면 되므로 일반 피보나치 값 계산에 비해 적게 걸린다. int get_fibonacci_last_digit_naive(int n) { if (n &lt;= 1) return n; int previous = 0; int current = 1; for (int i = 0; i &lt; n - 1; ++i) { int tmp_previous = previous; previous = current; current = tmp_previous + current; current = current % 10; } return current; } 하지만 Pisano Period를 이용하면 더 빠르게 계산할 수 있다. Pisano Period는 피보나치 수를 어떤 정수 값 x로 나누었을 때 나머지가 주기를 이룬다는 것이다. 10으로 나눴을 때의 주기는 60이다. 그러므로 n을 60으로 나눈 나머지만 계산하면 된다. int get_fibonacci_last_digit_fast(int n) { n = n % 60; if (n &lt;= 1) return n; int previous = 0; int current = 1; for (int i = 0; i &lt; n - 1; ++i) { int tmp_previous = previous; previous = current; current = tmp_previous + current; current = current % 10; } return current % 10; } Fibonacci Remainder 위에서 했던 것처럼 나머지만 계산하게 되면 나누는 값 x보다 작은 값만을 계산하므로 전체 피보나치 값을 계산하고 x로 나누는 것 보다 빠르다. long long get_fibonacci_huge_naive(long long n, long long m) { if (n &lt;= 1) return n; long long previous = 0; long long current = 1; for (long long i = 0; i &lt; n - 1; ++i) { long long tmp_previous = previous; previous = current; current = tmp_previous + current; current = current % m; } return current; } 이 알고리즘은 n번 계산하므로 O(n)이다. 하지만 m이 커지게 되면 연산량이 커지게 된다. 위에서 마지막 숫자를 계산하는 것처럼 Pisano Period를 참고하면, 피보나치 값의 나머지가 주기를 이룬다는 것을 알 수 있다. Pisano Period의 특징은 주기가 시작할 때 ‘0’ ‘1’로 시작한다는 점이다. 이 점을 사용하면 반복 되는 패턴 길이를 알 수 있다. long long get_fibonacci_huge_fast(long long n, long long m) { if (n &lt;= 1) return n; bool pattern_flag = false; long long pattern_size = 0; long long previous = 0; long long current = 1; for (long long i = 0; i &lt; n - 1; ++i) { long long tmp_previous = previous; previous = current; current = tmp_previous + current; current = current % m; if (previous == 0 &amp;&amp; current == 1) { pattern_size = i + 1; pattern_flag = true; break; } } if (pattern_flag == false) return current; previous = 0; current = 1; n = n%pattern_size; if (n &lt;= 1) return n; for (long long i = 0; i &lt; n - 1; ++i) { long long tmp_previous = previous; previous = current; current = tmp_previous + current; current = current % m; } return current; } 이를 통해 최악의 상황의 연산량은 O(pisanoPeriod(x))이다.",
    "tags": "algorithm",
    "url": "/algorithm/2021/02/12/AG-fibonacci.html"
  },{
    "title": "Fibonacci Sum",
    "text": "Fibonacci Sum 피보나치 수의 합은 모든 피보나치 수를 구하면서 더 하는 방법을 사용할 수 있다. 이 방법은 모든 숫자를 구하면서 진행된다. 하지만 빠르게 수학적으로 피보나치 수의 합을 구할 수 있다. 결국 우리는 fibonacci(n+2) 만 구하면 된다. long long fibonacci_sum_fast(long long n) { long long result = get_fibonacci(n + 2) - 1; return result; } Fibonacci Partial Sum 위와 같은 방법으로 부분 합을 구할 수 있다. from indexA to indexB라고 했을 때, indexA까지의 합 : F(A+2)-1 indexB-1까지의 합 : F(B+1)-1 이므로, 부분합은 F(A+2) - F(B+1)이다. long long get_fibonacci_partial_sum_fast(int from, int to) { long long result = get_fibonacci(to + 2) - get_fibonacci(from + 1); return result; } Fibonacci Square Sum 피보나치 수의 제곱 합은 위 그림처럼 표현 할 수 있다. long long fibonacci_sum_squares_fast(long long n) { long long result = get_fibonacci(n + 1)*get_fibonacci(n); return result; }",
    "tags": "algorithm",
    "url": "/algorithm/2021/02/12/AG-fibonacci-sum.html"
  },{
    "title": "TCP Port",
    "text": "포트의 종류 System Port(well-known Port) 범위 : 0~1023 IANA(Internet Assigned Numbers Authority, 인터넷 할당 번호 관리기관)에서 할당한 TCP 및 UDP 포트 번호의 일부이다. 대부분의 유닉스 계열 운영 체제의 경우, 잘 알려진 포트를 열려면 루트 권한이 있어야 한다. 강제 지정이 아닌 권고안이다. 다른 용도로 사용할 경우 트로이 목마와 같은 프로그램들이 악의전인 목적으로 포트를 변경하여 사용하는 경우도 있다. 아래는 자주 사용하는 포트이다. 자세한 포트 내용은 위키피디아 포트 설명 7 ECHO 9 DISCARD 13 DAYTIME 17 QOTD(Quote of the Day) 19 CHARGEN 20 FTP 데이터 포트 21 FTP 제어 포트 22 SSH 23 Telnet 25 SMTP 53 DNS 67 BOOTP 서버, DHCP 68 BOOTP 클라이언트, DHCP 69 TFTP 79 Finger 80 HTTP 110 POP3 111 RPC 123 NTP 143 IMAP 161 SNMP 162 SNMPTRAP 179 BGP 220 IMAPv3 443 SSL/TLS 500 IKE USER Port(Registered Port) 범위 : 1024~49151 이 포트들은 RFC6335에 따라 IANA(인터넷 할당 번호 관리기관)에 등록한다. 통상 이 구간의 포트들은 시스템에서 슈퍼유저 관한이 없어도 사용 가능하다. 포트 설명 1080 SOCKS 프록시 1194 OpenVPN 3306 MySQL 3479, 3480 플레이스테이션 네트워크 3690 Subversion 6379 Redis 서비스 17500 Dropbox LanSync 프로토콜 Private Port(Dynamic Port) 범위 : 49152 ~ 65535 임시포트로서, 어떤 프로세스에 의해서 사용 가능",
    "tags": "network communication",
    "url": "/communication/2021/02/07/CM-tcp-port.html"
  },{
    "title": "Transfer Learning",
    "text": "전이학습은 학습 데이터가 부족한 모델을 구축하기 위해 사용되는 방법이다. 예를 들어, 학습 데이터가 부족한 x-lay 이미지를 판단하는 모델을 만들려할 때 우리는 학습 데이터가 많은 일반 이미지 인식 모델의 layers를 가져와서 x-lay 이미지 모델에 사용할 수 있다. 이처럼 실제 학습 데이터가 부족한 모델을 구축할 때, 비슷한 형태의 데이터를 사용하는 다량의 데이터로 구축된 모델을 전이학습하여 성능을 높일 수 있다.",
    "tags": "strategy machinelearning",
    "url": "/machinelearning/2021/01/29/ML-transfer-learning.html"
  },{
    "title": "Multi-task Learning",
    "text": "Transfer learning(전이학습)은 빅 데이터의 모델 A를 적은 데이터 모델 B에 적용시키는 순차적인 방법이었다. 하지만 Multi-task Learning은 모델 A와 모델 B를 동시에 학습시키는 방법이다. 예로 길거리의 이미지로 정지 신호가 있는지 판단하는 모델 보행자가 있는지 판단하는 모델 차가 있는지 판단하는 모델 신호등을 판단하는 모델 을 동시에 학습시키는 방법이다. Input은 1개 이미지만 label은 4개가 존재하게 된다. Softmax regression과의 차이점은 Softmax는 하나의 label을 가지게 된다는 점이다. Multi-task learning은 세가지 상황에서 도움이 된다. 저수준의 구조가 비슷할 때 각 task의 데이터 양이 비슷할 때 모든 task의 충분히 큰 신경망을 학습시킬 수 있을 때 Rich Carona는 충분히 크지 않은 신경망을 multi-task learning 시키면 따로 학습시키는 것보다 성능이 저하된다는 사실을 알아냈다. 그러나 각 각 따로 학습시키는 것보다 데이터가 충분하고 신경망이 충분히 크면 multi-task learning이 도움이 된다는 건 확실하다. Transfer learning(전이학습)은 데이터가 적은 모델을 위한 방법이었다. 하지만 multi-task learning은 각 task 별 데이터가 필요하기 때문에 좀 더 특별한 상황에서 사용된다. 현재 전이학습이 더 많이 사용되고 있다. 하지만 두 방법 모두 도움이 되는 방법 임은 확실하다.",
    "tags": "strategy machinelearning",
    "url": "/machinelearning/2021/01/29/ML-multi-task-learning.html"
  },{
    "title": "MAC, IP, ARP",
    "text": "MAC 주소 MAC 주소(Media Access Control Address)는 네트워크 세그먼트의 데이터 링크 계층에서 통신을 위한 네트워크 인터페이스에 할당된 교유 식별자이다. MAC 주소는 이더넷과 와이파이를 포함한 대부분의 IEEE 802 네트워크 기술에 네트워크 주소로 사용된다. MAC 주소는 하드웨어에 저장되어, 제조업체의 등록된 식별 번호로 인코딩되며 BIA(burned-in Address) 로 부를수 있다. 이더넷 하드웨어 주소(Ethernet hardware address, EHA), 하드웨어 주소, 물리주소로 부르기도 한다. IP 주소 IP 주소는 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호이다. 오늘날 주로 IPv4가 사용되고 있지만, 주소가 부족해지면서 IPv6가 사용되기 시작됐다. IP는 255.255.255.255까지 가능하다. 127.0.0.1은 localhost IP로 자기자신을 가리킨다. IP Datagram IP 계층의 패킷을 의미한다. Header+Data로 구성된다. Header의 구성 요소는 Version : IPv4(0100), IPv6(0110) Header Length 서비스타입(Differentiated Services) : QoS 제공을 위해 사용 Total Length 식별자(Identification) Flag 단편옵셋(Fragmentation Offset) 수명(TTL) Protocol Checksum Source Address Destination Address IP Class IP 주소는 32bit로 구성 1바이트.1바이트.1바이트.1바이트 (255.255.255.255) IP는 네트워크 영역과 호스트IP 영역이 구분되어있다. 클래스는 어디부터가 네트워크 영역인지 호스트IP 영역인지를 나타낸다. A Class A Class는 0으로 시작한다. 네트워크 주소 영역이 작기 때문에 많은 경우의 호스트 IP를 가질수 있다. IP 범위는 0.0.0.0 ~ 127.255.255.255까지 이다. 네트워크 주소는 2^7 호스트 주소의 경우의 수는 (2^24)-2 이다. 모두 1인경우와 모두 0인 경우는 각 각 브로트캐스트 주소, 네트워크 주소로 사용하기 때문에 제외한다. B Class B Class는 10으로 시작한다. 범위는 128.0.0.0 ~ 191.255.255.255까지 이다. 네트워크 주소 경우의 수는 2^14 호스트 주소 경우의 수는 (2^16)-2이다. -2는 A class와 같은 이유이다. C Class 110으로 시작한다. 범위는 192.0.0.0 ~ 223.255.255.255 네트워크 경우의 수 2^21 호스트 주소 경우의 수 (2^8)-2 ARP 주소 결정 프로토콜(Address Resolution Protocol)은 네트워크 상에서 IP 주소를 물리적 네트워크 주소로 대응 시키기 위해 사용되는 프로토콜이다. 일종의 IP 주소와 MAC 주소를 대응 시켜놓은 table이다.",
    "tags": "network communication",
    "url": "/communication/2021/01/28/CM-mac-ip-arp.html"
  },{
    "title": "Training and Testing on different distribution",
    "text": "Training을 시킬 때 우리는 많은 데이터셋을 필요로한다. 하지만 우리가 학습시킬 수 있는 데이터셋이 많지 않을 때 비슷한 환경의 데이터 셋을 가져와서 학습시킬 수 있다. 예를 들어, 핸드폰 이미지 인식을 할 때, 우리가 가지고 있는 데이터 셋이 10000개 뿐이라고 가정하자, 하지만 인터넷에 카메라로 찍은 사진 데이터는 20만개가 존재한다. 카메라로 찍은 사진 데이터와 핸드폰으로 찍은 사진 데이터는 서로 다르다. 하지만 핸드폰 이미지 인식을 학습시킬 때, 카메라로 찍은 데이터를 사용하여 정확도를 높일 수 있다. 데이터 구성 위 예에서 사용할 수 있는 데이터 구성은 이렇다. 1. Option 1 카메라 데이터와 핸드폰 데이터를 무작위로 섞은 뒤, 흔히 하는 대로 적절한 비율로 Train, Dev, Test로 분리한다. 하지만, 이렇게 할경우 Dev, Test Set이 우리가 원하는 환경과 다르게 된다. 우리의 목표는 핸드폰 이미지를 인식하는 것이다. 하지만 카메라 이미지를 Dev, Test Set에 놓는 것은 옳지 못한 결과를 낼 수 있다. 즉 이 방법은 옳지 못하다. 2. Option 2 우리가 원하는 결과를 얻기 위해 Dev, Test Set은 핸드폰 이미지로만 구성한다. 그리고 Train Set에만 카메라 이미지를 포함시킨다. 즉, Train Set을 20만개의 카메라 데이터 + 5000개의 핸드폰 데이터로 설정한다. 그리고 Dev, Test를 각 2500개로 설정한다. 에러의 중의성 Train error가 1%라고 할 때, Dev error가 8%라면 이는 Train에 과대적합 된것인가?? Different distribution data를 학습시켰기 때문에 이 error 차이는 두가지 의미를 가진다. Train에 과대적합, 즉 variance가 높음 Dev set과 Train set distribution의 난이도 차이(Data Mismatch) 2번째 상황을 예로 들어보자, 우리는 카메라 이미지를 가지고 있다. 인터넷 카메라 이미지는 화질이 높고, 정확하게 찍혔다. 하지만 핸드폰 이미지는 화질이 낮고, 흐리며, 잘못 찍혔을 수 있다. 즉, 핸드폰 이미지 인식이 카메라 이미지 인식보다 어렵다. 그렇기 때문에 Dev set의 error가 높게 나올 수 있다. 이를 해결하기 위한 방법으로 Train Dev Set을 사용할 수 있다. Train Dev Set Train set에서 Train dev set을 따로 분리한다. 그러면 이제 Train set과 Train dev set은 같은 distribution을 가진다. Train dev set의 error를 확인하면 이 error 차이가 variance 때문인지 data mismatch때문인지 알 수 있다. 첫번째 예를 들어보면, Train Error : 1% Train Dev Error : 8% Dev Error : 9% 이 경우는 Train dev error와 Train error의 차이가 크기 때문에 variance 때문임을 알 수 있다. 두번째 경우는 Train Error : 1% Train Dev Error : 2% Dev Error : 9% 여기서는 Dev Error가 큰 차이를 보이므로, Data Mismatch가 원인임을 알 수 있다.",
    "tags": "strategy machinelearning",
    "url": "/machinelearning/2021/01/24/ML-training-and-testing-on-different-distribution.html"
  },{
    "title": "Bayes Error",
    "text": "Bayes Error Bayes error는 모든 machine learning 모델의 최소 오차이다. 즉, 모델의 error 참조점이 된다. 모델의 Bayes error 기준으로 train error와 test error를 비교하여, 모델의 bias를 줄여야 하는지 variance를 줄여야 하는 지 결정할 수 있다. Bayes err는 human level error로 추정 할 수있지만, 요즘에는 인간의 능력치를 넘어서는 기계학습 분야와 모델이 존재하기 때문에 모델을 학습시키면서 추정해야 할 수도 있다. Example Bayes err : 2% train err : 3% test err : 3.5% 이 경우에는 Bayes err와 train err의 차이가 1%인 반면에 train과 test err 차이가 0.5%이기 때문에 bias를 줄이는 것을 목표로 해야된다. Bayes err : 2% train err : 3% test err : 5% 이 경우에는 Bayes err와 train err의 차이가 1%, train과 test err 차이가 2%이므로 variance를 줄이기 위해 노력해야함을 알 수 있다.",
    "tags": "strategy machinelearning",
    "url": "/machinelearning/2021/01/23/ML-bayeserror.html"
  },{
    "title": "OSI Model",
    "text": "OSI Model OSI(Open System Interconnection Reference Model)은 국제표준화기구(ISO)에서 개발한 모델로, 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것이다. 일반적으로 OSI 7 Layer라고 한다. Physical Layer 물리 계층은 네트워크의 기본 네트워크 하드웨어 전송 기술을 이룬다. 네트워크의 높은 수준의 논리 데이터 구조를 기초로 하는 필수 계층이다. 다양한 특징의 하드웨어 기술이 접목되어 있기에 OSI 아키텍처에서 가장 복잡한 계층으로 간주된다. Switch 이전에 사용되던 Hub와, Cabling 등이 물리 계층이다. Cable Cable은 두 종류로 나누어 진다. Fiber Copper Fiber는 일명 광케이블로 빛을 전송하는 한개 혹은 여러개의 optical fibers(광섬유)로 구성된다. Fiber optics는 전송속도가 빠르고 이동간 에너지 손실이 없기 때문에 원거리 통신에 사용가능하다. 또한 전파 간섭이 없기 때문에 간섭을 통한 신호 에러도 피할 수 있다. 하지만 광섬유를 통한 광신호를 전자 신호로 변화하여 사용해야 하며, 제조 물성이 한정적이며, 공정 다양성이 상대적으로 적고 제조가 까다롭다. Copper은 Fiber cable의 단점이 장점이나, Fiber의 가격이 내려감에 따라 Copper Cable의 사용도가 낮아졌다. Datalink Layer 데이터 링크 계층은 포인트 투 포인트 간 신뢰성 있는 전송을 보장하기 위한 계층으로 CRC 기반의 오류 제어와 흐름제어가 필요하다. 네트워크 위의 개체들간 데이터를 전달하고, 물리 계층에서 발생할 수 있는 오류를 찾아 내고, 수정하는 데 필요한 기능적, 절차적 수단을 제공한다. 주소 값은 물리적으로 할당 받는 MAC 주소를 사용한다. MAC 주소는 네트워크 카드가 만들어질때 설정되는 고유한 물리 주소이다. 데이터 링크 계층의 예는 이더넷이다. 이 외에도 HDLC나 ADCCP 같은 포인트 투 포인트 프로토콜이나 패킷 스위칭 네트워크 LLC, ALOHA 같은 근거리 네트워크용 프로토콜이 있다. 네트워크 Bridge(브릿지) 나 Switch(스위치) 등이 이 계층에서 동작한다. Network Layer 네트워크 계층은 여러 개의 노드를 거칠 때마다 경로를 찾아주는 역할을 하는 계층이다. 다양한 길이의 데이터를 네트워크를 통해 전달하고, 그 과정에서 전송 계층이 요구하는 서비스 품질(QoS)를 제공하기 위한 기능적, 절차적 수단을 제공한다. 네트워크 계층은 Routing 흐름 제어 세그멘테이션(segmentation/desegmentation) 오류 제어 인터네트워킹(Internetworking) 등을 수행한다. Router가 이 계층에서 동작하고 이 계층에서 동작하는 Switch도 있다. IP(Internet Protocol) 이 Network Layer 프로토콜이다. Transport Layer 전송 계층은 양 끝단 사용자들이 신뢰성있는 데이터를 주고 받을 수 있도록 해주며, 상위 계층들이 데이터 전달의 유효성이나 효율성을 생각하지 않도록 해준다. 시퀀스 넘버 기반의 오류 제어 방식을 사용한다. 전송 계층은 특정 연결의 유효성을 제어하고, 일부 프로토콜은 상태 개념이 있고, 연결 기반이다. 이는 전송 계층이 패킷들의 전송이 유효한지 확인하고 전송 실패한 패킷들을 다시 전송한다는 것을 뜻한다. TCP(Transmission Control Protocol) 과 UDP(User Datagram Protocl) 가 전송 계층의 프로토콜이다. Session Layer 세션 계층은 양 끝단의 응용 프로세스가 통신을 관리하기 위한 방법을 제공한다. Duplex Half-duplex Full-duplex 의 통신과 함께 체크 포인팅과 유휴, 종류, 다시 시작 과정 등을 수행한다. 이 계층은 TCP/IP 세션을 만들고 없애는 책임을 진다. 통신하는 사용자들을 동기화하고 오류복구 명령들을 일괄적으로 다룬다. 통신을 하기 위한 세션을 확립/유지/중단 (운영체제가 처리) Presentation Layer 표현 계층은 코드 간의 번역을 담당하여 사용자 시스템에서 데이터의 형식상 차이를 다루는 부담을 응용 계층으로 부터 덜어준다. MIME 인코딩이나 암호화 등의 동작이 표현 계층에서 이루어진다. 예로 EBCDIC로 인코딩된 문서 파일을 ASCII로 인코딩된 파일로 바꾸어주는 것이 표현 계층의 역할이다 사용자의 명령어를 완성 및 결과 표현 포장/압축/암호화 Application Layer 응용 계층은 응용 프로세스와 직접 관계하여 일반적인 응용 서비스를 수행한다. 일반적인 응용 서비스는 관련된 응용 프로세스들 사이의 전환을 제공한다. 응용 서비스의 예로, 가성 터미널 등이 있다. 네트워크 소프트웨어 UI 사용자의 입출력",
    "tags": "network communication",
    "url": "/communication/2021/01/22/CM-osi.html"
  },{
    "title": "Classification Evaluation Metrics",
    "text": "Precision &amp; Recall Precision 머신러닝에서 분류 작업을 할 때, Precision은 Positive로 분류된 element 중 실제 Positive element의 비율이다. In a classification task, the Precision for a class is the number of true positives divided by the total number of elements labelled as belonging to the positive class Recall Recall은 실제 Positive class 중 positive로 올바르게 분류된 것의 비율이다. Recall is defined as the number of true positives divided by the total number of elements that actually belong to the positive class Precision-Recall Trade-off 이상적인 시나리오는 Precision과 Recall이 둘 다 1.0인 경우이다. 하지만 대부분의 상황에서 이 두가지가 모두 만점을 받게 하긴 어렵다. 왜냐하면 대부분의 데이터셋에는 noise가 존재하기 때문에 완벽하게 분리하기란 어렵다. 따라서 모델은 Threshold를 사용하여 Precision과 Recall의 trade-off를 반영하여 선택되어야 한다. Accuracy Precision과 Recall은 Positive 상황만 고려한다. 하지만 False 상황 또한 고려할 수 있는 요소이다. Accuracy는 False 상황을 고려하여 계산된다. 이를 통해 False와 True가 모두 고려된 평가를 할 수 있다. Accuracy는 가장 직관적으로 모델의 성능을 나타내는 지표이다. 그러나, Bias of Domain이 고려되어야 하므로 이를 보완하는 지표가 필요하다. 만약 입력 데이터가 불균형 데이터라면 Accuracy는 올바른 평가를 내지 못한다. 즉, 데이터가 균형적일때 Accuracy는 좋은 선택이 된다. F1 Score F1 Score는 Precision과 Recall의 harmonic mean(조화평균)이다. F1 Score는 불균형 데이터에서도 준수한 성능 측정을 보여준다. 왜냐하면 사용되는 조화평균이 Precision과 Recall 사이의 불균형을 잘 보정해주기 때문이다.",
    "tags": "strategy machinelearning",
    "url": "/machinelearning/2021/01/20/ML-ClEvMet.html"
  },{
    "title": "Compiler, Linker, Builder",
    "text": "Compiler 초기에 컴퓨터는 기계어로 프로그래밍 되었다. 하지만 기계어는 인간이 해석하기에 굉장히 어렵기때문에 새로운 방법이 필요했다. 기계어 집합을 표현하는 텍스트 문서를 만든다. 텍스트 문서를 기계어로 변환하는 프로그램을 만든다. 이 프로그램이 Compiler 이고, 텍스트 문서는 Source Code File 또는 Source File이다. Linker 소스코드의 규모가 커지면서, 모든 소스코드를 한 파일안에 작성하는것은 불편하고 비효율적이었다. 따라서 한 소스 파일을 여러 소스 파일로 분리하는 방법이 창안되었다. 하지만 여러 소스 파일을 연결해야 하기때문에, Linker라는 프로그램이 만들어졌다. Builder 실행 파일을 만드는 절차는 아래와 같다. Write Source Code File Compile Source Code Link object files that Compiler made Excutable File is created 이 절차를 Build한다고 하고, 이 때 사용되는 프로그램을 Builder라고 한다. Compile + Link = Build Compiler + Linker = Builder",
    "tags": "computerscience",
    "url": "/computerscience/2021/01/20/CS-clb.html"
  }]};
