"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Filter,
  Search,
  MoreHorizontal,
  Calendar,
  Target,
  ActivityIcon,
  ArrowUp,
  ArrowDown,
  Edit,
  Trash2,
  Eye,
} from "lucide-react"

interface Task {
  id: number
  title: string
  status: "completed" | "in-progress" | "pending"
  priority: "high" | "medium" | "low"
  assignee: string
  dueDate: string
  project: string
  progress?: number
}

interface Project {
  id: number
  name: string
  progress: number
  status: "active" | "completed" | "on-hold"
  tasks: number
  team: number
  dueDate: string
  budget: string
}

interface Activity {
  id: number
  type: "task_completed" | "deadline_warning" | "project_update" | "team_join"
  message: string
  time: string
  user?: string
  icon: any
  color: string
}

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [currentTime, setCurrentTime] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fix hydration by only showing time after component mounts
  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }

    updateTime() // Set initial time
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Design new landing page",
      status: "in-progress",
      priority: "high",
      assignee: "Sarah Chen",
      dueDate: "2024-01-15",
      project: "Website Redesign",
      progress: 75,
    },
    {
      id: 2,
      title: "Implement user authentication",
      status: "completed",
      priority: "high",
      assignee: "Mike Johnson",
      dueDate: "2024-01-10",
      project: "Mobile App",
      progress: 100,
    },
    {
      id: 3,
      title: "Write API documentation",
      status: "pending",
      priority: "medium",
      assignee: "Alex Rodriguez",
      dueDate: "2024-01-20",
      project: "API Development",
      progress: 0,
    },
    {
      id: 4,
      title: "Conduct user testing",
      status: "in-progress",
      priority: "medium",
      assignee: "Emma Davis",
      dueDate: "2024-01-18",
      project: "Website Redesign",
      progress: 45,
    },
    {
      id: 5,
      title: "Optimize database queries",
      status: "pending",
      priority: "low",
      assignee: "David Kim",
      dueDate: "2024-01-25",
      project: "Performance",
      progress: 0,
    },
    {
      id: 6,
      title: "Mobile app testing",
      status: "in-progress",
      priority: "high",
      assignee: "Lisa Wang",
      dueDate: "2024-01-12",
      project: "Mobile App",
      progress: 60,
    },
  ])

  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Website Redesign",
      progress: 75,
      status: "active",
      tasks: 12,
      team: 4,
      dueDate: "2024-02-15",
      budget: "$25,000",
    },
    {
      id: 2,
      name: "Mobile App",
      progress: 90,
      status: "active",
      tasks: 8,
      team: 3,
      dueDate: "2024-01-30",
      budget: "$45,000",
    },
    {
      id: 3,
      name: "API Development",
      progress: 45,
      status: "active",
      tasks: 15,
      team: 2,
      dueDate: "2024-03-10",
      budget: "$18,000",
    },
    {
      id: 4,
      name: "Marketing Campaign",
      progress: 100,
      status: "completed",
      tasks: 6,
      team: 5,
      dueDate: "2024-01-05",
      budget: "$12,000",
    },
    {
      id: 5,
      name: "Security Audit",
      progress: 20,
      status: "active",
      tasks: 10,
      team: 2,
      dueDate: "2024-02-28",
      budget: "$8,000",
    },
  ])

  const [activities] = useState<Activity[]>([
    {
      id: 1,
      type: "task_completed",
      message: 'Mike completed "Implement user authentication"',
      time: "2 hours ago",
      user: "Mike Johnson",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400",
    },
    {
      id: 2,
      type: "deadline_warning",
      message: '"Design new landing page" due in 2 days',
      time: "4 hours ago",
      icon: AlertCircle,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      id: 3,
      type: "project_update",
      message: "Website Redesign reached 75% completion",
      time: "1 day ago",
      icon: TrendingUp,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      id: 4,
      type: "team_join",
      message: "Lisa Wang joined the Mobile App project",
      time: "2 days ago",
      user: "Lisa Wang",
      icon: Users,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      id: 5,
      type: "task_completed",
      message: 'Emma completed "User research analysis"',
      time: "3 days ago",
      user: "Emma Davis",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "active":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "on-hold":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.project.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || task.status === statusFilter
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const completedTasks = tasks.filter((task) => task.status === "completed").length
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress").length
  const pendingTasks = tasks.filter((task) => task.status === "pending").length
  const totalTasks = tasks.length

  const activeProjects = projects.filter((project) => project.status === "active").length
  const completedProjects = projects.filter((project) => project.status === "completed").length

  const handleTaskStatusChange = (taskId: number, newStatus: Task["status"]) => {
    setIsLoading(true)
    setTimeout(() => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId
            ? { ...task, status: newStatus, progress: newStatus === "completed" ? 100 : task.progress }
            : task,
        ),
      )
      setIsLoading(false)
    }, 500)
  }

  const handleProjectUpdate = (projectId: number) => {
    setIsLoading(true)
    setTimeout(() => {
      setProjects(
        projects.map((project) =>
          project.id === projectId ? { ...project, progress: Math.min(project.progress + 5, 100) } : project,
        ),
      )
      setIsLoading(false)
    }, 300)
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500"
    if (progress >= 50) return "bg-blue-500"
    if (progress >= 25) return "bg-yellow-500"
    return "bg-red-500"
  }

  // Don't render time-dependent content until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  Project Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">
                  Manage your projects and track progress
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Project Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">
                Manage your projects and track progress • Last updated: {currentTime}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  setIsLoading(true)
                  setTimeout(() => setIsLoading(false), 1000)
                }}
                disabled={isLoading}
              >
                <Plus className="h-4 w-4 mr-2" />
                {isLoading ? "Creating..." : "New Project"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects ({projects.length})</TabsTrigger>
            <TabsTrigger value="tasks">Tasks ({totalTasks})</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900 dark:text-white">Total Projects</CardTitle>
                  <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{projects.length}</div>
                  <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    +2 from last month
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900 dark:text-white">Active Tasks</CardTitle>
                  <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {inProgressTasks + pendingTasks}
                  </div>
                  <div className="flex items-center text-xs text-red-600 dark:text-red-400">
                    <ArrowDown className="h-3 w-3 mr-1" />
                    -3 from yesterday
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900 dark:text-white">Completed</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{completedTasks}</div>
                  <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    +5 from yesterday
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-900 dark:text-white">Team Members</CardTitle>
                  <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">12</div>
                  <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    +1 new member
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white flex items-center">
                    <ActivityIcon className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Latest updates from your projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 max-h-80 overflow-y-auto">
                  {activities.map((activity) => {
                    const IconComponent = activity.icon
                    return (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <IconComponent className={`h-5 w-5 mt-0.5 ${activity.color}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.message}</p>
                          <p className="text-xs text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Project Progress
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Overview of active projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {projects
                    .filter((project) => project.status === "active")
                    .map((project) => (
                      <div key={project.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{project.tasks} tasks</span>
                          <span>Due: {project.dueDate}</span>
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Plus className="h-6 w-6" />
                    <span>New Task</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Calendar className="h-6 w-6" />
                    <span>Schedule</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <Users className="h-6 w-6" />
                    <span>Team</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col space-y-2">
                    <BarChart3 className="h-6 w-6" />
                    <span>Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-900 dark:text-white">Progress</span>
                        <span className="text-gray-600 dark:text-gray-300">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Tasks:</span>
                        <span className="text-gray-900 dark:text-white ml-1">{project.tasks}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Team:</span>
                        <span className="text-gray-900 dark:text-white ml-1">{project.team}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Budget:</span>
                        <span className="text-gray-900 dark:text-white ml-1">{project.budget}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Due:</span>
                        <span className="text-gray-900 dark:text-white ml-1">{project.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleProjectUpdate(project.id)}
                        disabled={isLoading}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => handleProjectUpdate(project.id)}
                        disabled={isLoading || project.status === "completed"}
                      >
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {isLoading ? "Updating..." : "Update"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks" className="space-y-6">
            {/* Filters */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        placeholder="Search tasks, assignees, or projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Priority</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-gray-900 dark:text-white">All Tasks ({filteredTasks.length})</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Manage and track your team's tasks
                    </CardDescription>
                  </div>
                  <Button size="sm" disabled={isLoading}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 group"
                    >
                      <div className="flex-1 space-y-2 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {task.title}
                          </h3>
                          <div className="flex gap-2">
                            <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                            <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span>Assigned to: {task.assignee}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>Project: {task.project}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>Due: {task.dueDate}</span>
                        </div>
                        {task.progress !== undefined && (
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full transition-all duration-300 ${getProgressColor(task.progress)}`}
                                style={{ width: `${task.progress}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{task.progress}%</span>
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2 mt-2 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleTaskStatusChange(task.id, task.status === "completed" ? "in-progress" : "completed")
                          }
                          disabled={isLoading}
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          {task.status === "completed" ? "Reopen" : "Complete"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {filteredTasks.length === 0 && (
                    <div className="text-center py-12">
                      <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 dark:text-gray-400 text-lg">No tasks found matching your criteria.</p>
                      <p className="text-gray-400 dark:text-gray-500 text-sm">Try adjusting your search or filters.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
