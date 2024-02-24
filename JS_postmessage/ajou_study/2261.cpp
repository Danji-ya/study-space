#include<stdio.h>
#include<vector>
#include<algorithm>
#define MAX 2147483647
using namespace std;

vector<pair<int,int>> v;
int res=MAX;

int dis(vector<pair<int,int>>& a,int i,int j){
	int x=a[j].first-a[i].first;
	int y=a[j].second-a[i].second;
	return x*x+y*y;
}

int shortestD(int start,int end){
	for(int i=start;i<end;i++){
		for(int j=i+1;j<=end;j++){
			int tmp=dis(v,i,j);
			if(res>tmp) res=tmp;
		}
	}
	return res;
}
				
int f(int l,int r){
	if(r-l+1<=3) return shortestD(l,r); 
	int mid=(l+r)/2;
	int left_v=f(l,mid);
	int right_v=f(mid+1,r);
	res=min(left_v,right_v);

	vector<pair<int,int>> temp;//가운데 찾기
	for(int i=l;i<=r;i++){
		int d=v[mid].first-v[i].first;
		if(d*d<res){
			temp.push_back({v[i].second,v[i].first});
		}
	}
	
	sort(temp.begin(),temp.end());
	for(int i=0;i<temp.size()-1;i++){
		for(int j=i+1;j<temp.size();j++){
			int d=temp[j].first-temp[i].first;
			if(d*d<res){
				res=min(res,dis(temp,i,j));
			}
			else break;
		}
	}

	return res;
}
			



int main(){
	int n,x,y;
	scanf("%d",&n);
	for(int i=0;i<4;i++){
		scanf("%d %d",&x,&y);
		v.push_back({x,y});
	}
	sort(v.begin(),v.end());
	printf("%d\n",f(0,n-1));
	
}
	

