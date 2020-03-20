#include<stdio.h>
#include<unistd.h>
#include<signal.h>

int count;

void myalarm()
{
	    printf("ding dong dang\n");
}

int main()
{

	printf("alarm setting\n");
	        // SIGALRM 이 발생하면 myalarm() 함수를 실행한다. 
	signal(SIGALRM, myalarm);
		//         // 알람을 1초로 설정한다. 
	alarm(10);	
	while(count<5){
   		printf("ok\n");    
		pause();//신호를 기다린다.
		// alarm 을 2초로 설정한다. 
		alarm(2);
		count++;
	}
}


