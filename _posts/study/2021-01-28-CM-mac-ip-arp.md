---
title: MAC, IP, ARP
categories:
  - communication
tags:
  - network
subtitle: 물리주소(MAC), IP 주소, ARP
comments: true
layout: post
---

## MAC 주소

MAC 주소(Media Access Control Address)는 네트워크 세그먼트의 **데이터 링크 계층**에서  
통신을 위한 네트워크 인터페이스에 할당된 교유 식별자이다.  
MAC 주소는 이더넷과 와이파이를 포함한 대부분의 IEEE 802 네트워크 기술에 네트워크 주소로 사용된다.  
MAC 주소는 하드웨어에 저장되어, 제조업체의 등록된 식별 번호로 인코딩되며 **BIA(burned-in Address)** 로 부를수 있다.  
**이더넷 하드웨어 주소(Ethernet hardware address, EHA), 하드웨어 주소, 물리주소**로 부르기도 한다.

---

## IP 주소

IP 주소는 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호이다.  
오늘날 주로 IPv4가 사용되고 있지만, 주소가 부족해지면서 IPv6가 사용되기 시작됐다.
IP는 255.255.255.255까지 가능하다.  
127.0.0.1은 localhost IP로 자기자신을 가리킨다.

### IP Datagram

IP 계층의 패킷을 의미한다. Header+Data로 구성된다.
Header의 구성 요소는

- Version : IPv4(0100), IPv6(0110)
- Header Length
- 서비스타입(Differentiated Services) : QoS 제공을 위해 사용
- Total Length
- 식별자(Identification)
- Flag
- 단편옵셋(Fragmentation Offset)
- 수명(TTL)
- Protocol
- Checksum
- Source Address
- Destination Address

### IP Class

IP 주소는 32bit로 구성 1바이트.1바이트.1바이트.1바이트 (255.255.255.255)  
IP는 네트워크 영역과 호스트IP 영역이 구분되어있다.
클래스는 어디부터가 네트워크 영역인지 호스트IP 영역인지를 나타낸다.
<img src="https://t1.daumcdn.net/cfile/tistory/99068D495BE8101D34"/>

#### A Class

A Class는 0으로 시작한다.  
네트워크 주소 영역이 작기 때문에 많은 경우의 호스트 IP를 가질수 있다.  
**IP 범위는 0.0.0.0 ~ 127.255.255.255**까지 이다.  
네트워크 주소는 **2^7**  
호스트 주소의 경우의 수는 **(2^24)-2** 이다.  
모두 1인경우와 모두 0인 경우는 각 각 브로트캐스트 주소, 네트워크 주소로 사용하기 때문에 제외한다.

#### B Class

B Class는 10으로 시작한다.
**범위는 128.0.0.0 ~ 191.255.255.255**까지 이다.  
네트워크 주소 경우의 수는 **2^14**  
호스트 주소 경우의 수는 **(2^16)-2**이다.
-2는 A class와 같은 이유이다.

#### C Class

110으로 시작한다.
**범위는 192.0.0.0 ~ 223.255.255.255**  
네트워크 경우의 수 **2^21**  
호스트 주소 경우의 수 **(2^8)-2**

---

## ARP

주소 결정 프로토콜(Address Resolution Protocol)은 네트워크 상에서 IP 주소를  
물리적 네트워크 주소로 대응 시키기 위해 사용되는 프로토콜이다.  
일종의 IP 주소와 MAC 주소를 대응 시켜놓은 table이다.

---
