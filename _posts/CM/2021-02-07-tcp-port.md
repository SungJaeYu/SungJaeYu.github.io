---
title: TCP Port
categories:
- communication
tags:
- network
layout: post
subtitle: TCP 포트 종류
comments: true
---

## 포트의 종류
### System Port(well-known Port)
범위 : 0~1023  
IANA(Internet Assigned Numbers Authority, 인터넷 할당 번호 관리기관)에서 할당한  
TCP 및 UDP 포트 번호의 일부이다.  
대부분의 유닉스 계열 운영 체제의 경우, 잘 알려진 포트를 열려면 루트 권한이 있어야 한다.  
강제 지정이 아닌 권고안이다.  
다른 용도로 사용할 경우 트로이 목마와 같은 프로그램들이 악의전인 목적으로 포트를 변경하여  
사용하는 경우도 있다.

아래는 자주 사용하는 포트이다.  
자세한 포트 내용은 
<a href="https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D">위키피디아</a>  


| 포트 | 설명 |
| -------- | -------- |
| 7 | ECHO |
| 9 | DISCARD |
| 13 | DAYTIME |
| 17 | QOTD(Quote of the Day) |
| 19 | CHARGEN |
| 20 | FTP 데이터 포트 |
| 21 | FTP 제어 포트 |
| 22 | SSH |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 67 | BOOTP 서버, DHCP |
| 68 | BOOTP 클라이언트, DHCP |
| 69 | TFTP |
| 79 | Finger |
| 80 | HTTP |
| 110 | POP3 |
| 111 | RPC |
| 123 | NTP |
| 143 | IMAP |
| 161 | SNMP |
| 162 | SNMPTRAP |
| 179 | BGP |
| 220 | IMAPv3 |
| 443 | SSL/TLS |
| 500 | IKE |


### USER Port(Registered Port)
범위 : 1024~49151  
이 포트들은 RFC6335에 따라 IANA(인터넷 할당 번호 관리기관)에 등록한다.  
통상 이 구간의 포트들은 시스템에서 슈퍼유저 관한이 없어도 사용 가능하다.

| 포트 | 설명 |
| -------- | -------- |
| 1080 | SOCKS 프록시 |
| 1194 | OpenVPN |
| 3306 | MySQL |
| 3479, 3480 | 플레이스테이션 네트워크 |
| 3690 | Subversion |
| 6379 | Redis 서비스 |
| 17500 | Dropbox LanSync 프로토콜 |

### Private Port(Dynamic Port)
범위 : 49152 ~ 65535  
임시포트로서, 어떤 프로세스에 의해서 사용 가능
