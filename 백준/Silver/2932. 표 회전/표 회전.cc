#include <iostream>
#include <cstdio>
#include <cstring>
#include <algorithm>
#include <vector>
#include <math.h>
#include <queue>
#include <set>
#include <list>
#include <utility>
#include <functional>
#define MAX 10005
#define INF 987654321
#define MOD 1000000
#pragma warning(disable:4996)
using namespace std;
typedef long long ll;
typedef pair<int, int> pi;
typedef pair<float, float> pf;

struct st
{
    int num,fx,fy,tx,ty;
    st(int n1,int n2,int n3,int n4,int n5) : num(n1),fx(n2),fy(n3),tx(n4),ty(n5){};
};
int n,m,a,x,y;
vector<st*> v;

int main()
{
    scanf("%d%d",&n,&m);
    for(int i=0;i<m;i++)
    {
        scanf("%d %d %d",&a,&y,&x);
        v.push_back(new st(a,(a-1)%n+1,(a-1)/n+1,x,y));
    }
    for(st *e:v)
    {
        int ffx=e->fx,ffy=e->fy,ttx=e->tx,tty=e->ty;
        int mx = ffx<=ttx?ttx-ffx:ttx-ffx+n;
        int my = ffy<=tty?tty-ffy:tty-ffy+n;
        for(st *ex:v)
            if(ffy==ex->fy)
                ex->fx=((ex->fx)-1+mx)%n+1;
        ffx=e->fx;
        for(st *ey:v)
            if(ffx==ey->fx)
                ey->fy=((ey->fy)-1+my)%n+1;
        printf("%d\n",mx+my);
    }
    return 0;
}