
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Account = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    company: "Acme Corp",
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex-1">
            <h1 className="text-lg font-semibold md:text-xl">Account Settings</h1>
          </div>
          <ThemeToggle />
        </header>

        <main className="p-4 md:p-6">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your account information and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={profile.name}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profile.email}
                          onChange={handleProfileChange}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={profile.company}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Saving..." : "Save Changes"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password to secure your account.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input
                          id="current-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          id="new-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    <Button type="submit">Update Password</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscription" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>
                    You are currently on the Free Plan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Free Plan</h3>
                          <p className="text-sm text-muted-foreground">
                            3 document generations per month
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">$0/month</div>
                          <div className="text-xs text-muted-foreground">
                            Current Plan
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      3/5 document generations used this month
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h3 className="font-semibold">Upgrade to Pro</h3>
                      <p className="text-sm text-muted-foreground">
                        Unlock all features and get unlimited document generations
                      </p>
                      <Button>Upgrade to Pro</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Plans</CardTitle>
                  <CardDescription>
                    Choose the plan that best fits your needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Free Plan */}
                    <div className="rounded-lg border p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Free</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          For individuals and startups
                        </p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$0</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>5 document generations per month</span>
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Basic customization</span>
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Email support</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="w-full" disabled>
                        Current Plan
                      </Button>
                    </div>

                    {/* Pro Plan */}
                    <div className="rounded-lg border border-primary p-6 bg-primary/5">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Pro</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          For growing businesses
                        </p>
                      </div>
                      <div className="mb-4">
                        <span className="text-3xl font-bold">$29</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Unlimited document generations</span>
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Advanced customization</span>
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Remove CharterGenie branding</span>
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Priority support</span>
                        </li>
                        <li className="flex items-center">
                          <CheckIcon className="h-5 w-5 text-primary mr-2" />
                          <span>Document version history</span>
                        </li>
                      </ul>
                      <Button className="w-full">Upgrade to Pro</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>
                    Customize the appearance of the application
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <button
                          className="border-2 rounded-md p-1 w-16 h-16 flex items-center justify-center bg-white text-black"
                          onClick={() => document.documentElement.classList.remove('dark')}
                        >
                          Light
                        </button>
                        <span className="text-xs">Light</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <button
                          className="border-2 rounded-md p-1 w-16 h-16 flex items-center justify-center bg-gray-900 text-white"
                          onClick={() => document.documentElement.classList.add('dark')}
                        >
                          Dark
                        </button>
                        <span className="text-xs">Dark</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <button
                          className="border-2 rounded-md p-1 w-16 h-16 flex items-center justify-center bg-gradient-to-b from-white to-gray-900 text-black dark:text-white"
                          onClick={() => {
                            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                              document.documentElement.classList.add('dark');
                            } else {
                              document.documentElement.classList.remove('dark');
                            }
                          }}
                        >
                          Auto
                        </button>
                        <span className="text-xs">System</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Font Size</Label>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          document.documentElement.style.fontSize = '14px';
                        }}
                      >
                        Small
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          document.documentElement.style.fontSize = '16px';
                        }}
                      >
                        Medium
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          document.documentElement.style.fontSize = '18px';
                        }}
                      >
                        Large
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Account;
