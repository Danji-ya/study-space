#include<stdio.h>
#include<algorithm>
//#include<vector>
using namespace std;
int arr[1001];
int psum[1001];



int maxS(int i,int j){
	return psum[j]-psum[i-1];
}

int main(){
	//vector<int> ab;
	
	int t,n,result;
	scanf("%d",&t);
	while(t--){
		result=-10001;
		scanf("%d",&n);
		for(int i=1;i<=n;i++){
			scanf("%d",&arr[i]);
			psum[i]=arr[i]+psum[i-1];
		}
		for(int i=1;i<=n;i++){
			for(int j=i;j<=n;j++){
				result=max(result,maxS(i,j));
			}
		}
		printf("%d\n",result);
	}
}

